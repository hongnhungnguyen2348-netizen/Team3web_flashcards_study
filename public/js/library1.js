// Trang thư viện lấy/lưu bộ flashcard qua API backend (/api/flashcards), không còn dùng localStorage.

// Lấy các phần tử DOM cần dùng cho điều hướng, modal và thao tác bộ sưu tập.
const pageButtons = document.querySelectorAll("[data-page]");
const pages = {
    home: document.getElementById("homePage"),
    editor: document.getElementById("editorPage"),
    account: document.getElementById("accountPage")
};

const createModal = document.getElementById("createModal");
const openCreateModal = document.getElementById("openCreateModal");
const cancelCreate = document.getElementById("cancelCreate");
const confirmCreate = document.getElementById("confirmCreate");
const folderNameInput = document.getElementById("folderNameInput");
const modalError = document.getElementById("modalError");

const editorModeLabel = document.getElementById("editorModeLabel");
const editorTitle = document.getElementById("editorTitle");
const termInput = document.getElementById("termInput");
const definitionInput = document.getElementById("definitionInput");
const addCardButton = document.getElementById("addCardButton");
const cancelEditCardButton = document.getElementById("cancelEditCardButton");
const createdCards = document.getElementById("createdCards");
const collectionGrid = document.getElementById("collectionGrid");
const selectedHint = document.getElementById("selectedHint");

const editCollectionButton = document.getElementById("editCollectionButton");
const deleteCollectionButton = document.getElementById("deleteCollectionButton");
const studyFlashcardButton = document.getElementById("studyFlashcardButton");

let collections = [];
let selectedCollectionId = null;
let currentEditingId = null;
let editingCardIndex = -1;
let editingCardId = null;

const inboxButton = document.getElementById("inboxButton");
const notificationBadge = document.getElementById("notificationBadge");
const notificationDropdown = document.getElementById("notificationDropdown");
const notificationList = document.getElementById("notificationList");
const markAllReadBtn = document.getElementById("markAllRead");
const notificationModal = document.getElementById("notificationModal");
const closeNotificationModalButton = document.getElementById("closeNotificationModal");
const modalNotificationTitle = document.getElementById("modalNotificationTitle");
const modalNotificationMessage = document.getElementById("modalNotificationMessage");
const modalNotificationTime = document.getElementById("modalNotificationTime");

init();

async function init() {
    collections = await loadCollections();
    selectedCollectionId = collections[0]?.id ?? null;
    renderCollections();
}

// Chuyển đổi giao diện chính mà không cần tải lại trang.
function showPage(pageName) {
    Object.values(pages).forEach((page) => page.classList.remove("active"));
    pages[pageName].classList.add("active");

    document.querySelectorAll(".nav-item").forEach((item) => {
        const isEditorButton = pageName === "editor" && item.id === "openCreateModal";
        item.classList.toggle("active", item.dataset.page === pageName || isEditorButton);
    });
}

// Nạp danh sách bộ flashcard của user hiện tại từ server.
async function loadCollections() {
    try {
        const res = await fetch('/api/flashcards');
        const data = await res.json();
        return data.success ? data.collections : [];
    } catch (err) {
        console.error('Không tải được bộ flashcard:', err);
        return [];
    }
}

// Vẽ lại danh sách bộ sưu tập trên trang chủ và giữ trạng thái đang chọn.
function renderCollections() {
    collectionGrid.innerHTML = "";

    collections.forEach((collection) => {
        const card = document.createElement("button");
        card.className = "collection-card";
        card.type = "button";
        card.dataset.id = collection.id;

        if (collection.id === selectedCollectionId) {
            card.classList.add("selected");
        }

        card.innerHTML = `
            <div class="card-top">
                <span class="folder-icon">▰</span>
                <span class="status ${collection.status === "Đã nhớ" ? "remembered" : "learning"}">${escapeHtml(collection.status)}</span>
            </div>
            <h2>${escapeHtml(collection.name)}</h2>
            <p>${collection.cards.length} thẻ bên trong</p>
        `;

        card.addEventListener("click", () => selectCollection(collection.id));
        collectionGrid.appendChild(card);
    });

    updateSelectedHint();
}

// Khi chọn một bộ sưu tập, viền của card được làm đậm hơn bằng class .selected.
function selectCollection(collectionId) {
    selectedCollectionId = collectionId;
    renderCollections();
}

function updateSelectedHint() {
    const collection = getSelectedCollection();

    if (!collection) {
        selectedHint.textContent = "Chưa có bộ sưu tập nào. Hãy tạo bộ flashcard mới.";
        return;
    }

    selectedHint.textContent = `Đang chọn: ${collection.name} (${collection.cards.length} thẻ).`;
}

function getSelectedCollection() {
    return collections.find((collection) => collection.id === selectedCollectionId);
}

// Mở modal đặt tên thư mục và đưa con trỏ vào ô nhập liệu.
function showCreateModal() {
    createModal.classList.add("show");
    createModal.setAttribute("aria-hidden", "false");
    folderNameInput.value = "";
    modalError.textContent = "";
    folderNameInput.focus();
}

function hideCreateModal() {
    createModal.classList.remove("show");
    createModal.setAttribute("aria-hidden", "true");
}

// Tạo bộ sưu tập mới qua API và chuyển sang giao diện nhập flashcard.
async function createFolder() {
    const folderName = folderNameInput.value.trim();

    if (!folderName) {
        modalError.textContent = "Vui lòng nhập tên thư mục trước khi tạo.";
        return;
    }

    try {
        const res = await fetch('/api/flashcards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: folderName, status: 'Đang học' })
        });
        const data = await res.json();

        if (!data.success) {
            modalError.textContent = data.error || "Không tạo được bộ flashcard.";
            return;
        }

        const newCollection = data.collection;
        collections.unshift(newCollection);
        selectedCollectionId = newCollection.id;
        currentEditingId = newCollection.id;
        editingCardIndex = -1;
        editingCardId = null;
        renderCollections();

        editorModeLabel.textContent = "Bộ flashcard mới";
        editorTitle.textContent = folderName;
        termInput.value = "";
        definitionInput.value = "";
        resetCardForm();
        renderCreatedCards();

        hideCreateModal();
        showPage("editor");
    } catch (err) {
        console.error('createFolder error:', err);
        modalError.textContent = "Lỗi kết nối tới server.";
    }
}

// Lưu flashcard mới hoặc cập nhật flashcard đang được chỉnh sửa qua API.
async function addFlashcard() {
    const term = termInput.value.trim();
    const definition = definitionInput.value.trim();
    const collection = collections.find((item) => item.id === currentEditingId);

    if (!collection) {
        alert("Không tìm thấy bộ flashcard đang soạn.");
        return;
    }

    if (!term || !definition) {
        alert("Vui lòng nhập đầy đủ thuật ngữ/câu hỏi và định nghĩa/câu trả lời.");
        return;
    }

    try {
        if (editingCardIndex >= 0 && editingCardId != null) {
            const res = await fetch(`/api/flashcards/${collection.id}/cards/${editingCardId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ term, definition })
            });
            const data = await res.json();
            if (!data.success) {
                alert(data.error || "Không cập nhật được flashcard.");
                return;
            }
            collection.cards[editingCardIndex] = { ...collection.cards[editingCardIndex], term, definition };
        } else {
            const res = await fetch(`/api/flashcards/${collection.id}/cards`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ term, definition })
            });
            const data = await res.json();
            if (!data.success) {
                alert(data.error || "Không thêm được flashcard.");
                return;
            }
            collection.cards.push(data.card);
        }

        renderCollections();
        resetCardForm();
        renderCreatedCards();
    } catch (err) {
        console.error('addFlashcard error:', err);
        alert("Lỗi kết nối tới server.");
    }
}

// Hiển thị các thẻ đã thêm ở trang soạn thảo.
function renderCreatedCards() {
    const collection = collections.find((item) => item.id === currentEditingId);

    if (!collection || collection.cards.length === 0) {
        createdCards.innerHTML = '<p class="empty-state">Chưa có thẻ nào trong bộ này.</p>';
        return;
    }

    createdCards.innerHTML = collection.cards.map((card, index) => `
        <article class="created-card ${index === editingCardIndex ? "editing" : ""}">
            <div>
                <strong>THUẬT NGỮ / CÂU HỎI</strong>
                <p>${escapeHtml(card.term)}</p>
            </div>
            <div>
                <strong>ĐỊNH NGHĨA / CÂU TRẢ LỜI</strong>
                <p>${escapeHtml(card.definition)}</p>
            </div>
            <div class="card-actions">
                <button class="secondary-button small-button" type="button" data-edit-index="${index}">Sửa</button>
                <button class="danger-button small-button" type="button" data-delete-index="${index}">Xóa</button>
            </div>
        </article>
    `).join("");
}

// Chuyển bộ sưu tập đang chọn sang trang soạn thảo để thêm, sửa hoặc xóa flashcard.
function editSelectedCollection() {
    const collection = getSelectedCollection();

    if (!collection) {
        alert("Vui lòng chọn một bộ sưu tập trước.");
        return;
    }

    currentEditingId = collection.id;
    selectedCollectionId = collection.id;
    editingCardIndex = -1;
    editingCardId = null;
    editorModeLabel.textContent = "Chỉnh sửa bộ flashcard";
    editorTitle.textContent = collection.name;
    resetCardForm();
    renderCollections();
    renderCreatedCards();
    showPage("editor");
}

// Xóa bộ sưu tập đang chọn khỏi thư viện qua API.
async function deleteSelectedCollection() {
    const collection = getSelectedCollection();

    if (!collection) {
        alert("Vui lòng chọn một bộ sưu tập trước.");
        return;
    }

    const isConfirmed = confirm(`Bạn có chắc muốn xóa bộ sưu tập "${collection.name}" không?`);

    if (!isConfirmed) {
        return;
    }

    try {
        const res = await fetch(`/api/flashcards/${collection.id}`, { method: 'DELETE' });
        const data = await res.json();

        if (!data.success) {
            alert(data.error || "Không xóa được bộ sưu tập.");
            return;
        }

        collections = collections.filter((item) => item.id !== selectedCollectionId);
        selectedCollectionId = collections[0]?.id ?? null;
        renderCollections();
    } catch (err) {
        console.error('deleteSelectedCollection error:', err);
        alert("Lỗi kết nối tới server.");
    }
}

// Chuyển sang trang học flashcard riêng, kèm id bộ sưu tập trên URL.
function studySelectedCollection() {
    const collection = getSelectedCollection();

    if (!collection) {
        alert("Vui lòng chọn một bộ sưu tập trước.");
        return;
    }

    if (collection.cards.length === 0) {
        alert("Bộ sưu tập này chưa có flashcard để học.");
        return;
    }

    window.location.href = `flashcard.html?id=${collection.id}`;
}

// Đưa dữ liệu của thẻ cần sửa lên form nhập liệu.
function startEditCard(index) {
    const collection = collections.find((item) => item.id === currentEditingId);

    if (!collection || !collection.cards[index]) {
        return;
    }

    editingCardIndex = index;
    editingCardId = collection.cards[index].id;
    termInput.value = collection.cards[index].term;
    definitionInput.value = collection.cards[index].definition;
    addCardButton.textContent = "Lưu chỉnh sửa";
    cancelEditCardButton.classList.add("show");
    renderCreatedCards();
    termInput.focus();
}

// Xóa một flashcard khỏi bộ đang chỉnh sửa qua API.
async function deleteCard(index) {
    const collection = collections.find((item) => item.id === currentEditingId);

    if (!collection || !collection.cards[index]) {
        return;
    }

    const isConfirmed = confirm("Bạn có chắc muốn xóa flashcard này không?");

    if (!isConfirmed) {
        return;
    }

    const cardId = collection.cards[index].id;

    try {
        const res = await fetch(`/api/flashcards/${collection.id}/cards/${cardId}`, { method: 'DELETE' });
        const data = await res.json();

        if (!data.success) {
            alert(data.error || "Không xóa được flashcard.");
            return;
        }

        collection.cards.splice(index, 1);
        renderCollections();
        resetCardForm();
        renderCreatedCards();
    } catch (err) {
        console.error('deleteCard error:', err);
        alert("Lỗi kết nối tới server.");
    }
}

// Reset form về chế độ thêm thẻ mới.
function resetCardForm() {
    editingCardIndex = -1;
    editingCardId = null;
    termInput.value = "";
    definitionInput.value = "";
    addCardButton.textContent = "+ Thêm thẻ";
    cancelEditCardButton.classList.remove("show");
    termInput.focus();
}

// Chống lỗi hiển thị khi người dùng nhập ký tự đặc biệt vào nội dung thẻ.
function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

pageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.page) {
            showPage(button.dataset.page);
        }
    });
});

openCreateModal.addEventListener("click", showCreateModal);
cancelCreate.addEventListener("click", hideCreateModal);
confirmCreate.addEventListener("click", createFolder);
addCardButton.addEventListener("click", addFlashcard);
cancelEditCardButton.addEventListener("click", () => {
    resetCardForm();
    renderCreatedCards();
});
editCollectionButton.addEventListener("click", editSelectedCollection);
deleteCollectionButton.addEventListener("click", deleteSelectedCollection);
studyFlashcardButton.addEventListener("click", studySelectedCollection);

createdCards.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-index]");
    const deleteButton = event.target.closest("[data-delete-index]");

    if (editButton) {
        startEditCard(Number(editButton.dataset.editIndex));
    }

    if (deleteButton) {
        deleteCard(Number(deleteButton.dataset.deleteIndex));
    }
});

folderNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        createFolder();
    }
});

createModal.addEventListener("click", (event) => {
    if (event.target === createModal) {
        hideCreateModal();
    }
});

// Tải thông tin tài khoản thực từ session server
async function loadUserInfo() {
    try {
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        const avatar = document.getElementById('accountAvatar');
        const usernameEl = document.getElementById('accountUsername');
        const emailEl = document.getElementById('accountEmail');

        if (data.ok && data.user) {
            usernameEl.textContent = data.user.username;
            emailEl.textContent = data.user.email || '(Chưa có email)';
            // Hiển thị chữ cái đầu của username làm avatar
            avatar.textContent = data.user.username.charAt(0).toUpperCase();
        } else {
            usernameEl.textContent = 'Chưa đăng nhập';
            emailEl.textContent = '';
            avatar.textContent = '?';
        }
    } catch (err) {
        console.error('Không lấy được thông tin user:', err);
    }
}

loadUserInfo();

async function loadNotifications() {
    try {
        const res = await fetch("/api/notifications");
        const data = await res.json();

        if (data.unreadCount > 0) {
            notificationBadge.style.display = "flex";
            notificationBadge.textContent = data.unreadCount > 99 ? "99+" : data.unreadCount;
        } else {
            notificationBadge.style.display = "none";
        }

        renderNotifications(data.notifications || []);
    } catch (err) {
        console.error("Lỗi tải thông báo:", err);
    }
}

function renderNotifications(notifications) {
    if (notifications.length === 0) {
        notificationList.innerHTML = '<p class="empty-notification">Chưa có thông báo nào</p>';
        return;
    }

    notificationList.innerHTML = notifications.map((notif) => `
        <div class="notification-item ${notif.is_read ? "" : "unread"}" data-id="${notif.id}">
            <div class="notification-icon ${notif.type}">
                ${getNotificationIcon(notif.type)}
            </div>
            <div class="notification-content">
                <div class="notification-title">${escapeHtml(notif.title)}</div>
                <div class="notification-preview">${escapeHtml(notif.message)}</div>
                <div class="notification-time">${formatTime(notif.created_at)}</div>
            </div>
        </div>
    `).join("");

    document.querySelectorAll(".notification-item").forEach((item) => {
        item.addEventListener("click", () => {
            openNotificationDetail(item.dataset.id);
        });
    });
}

function getNotificationIcon(type) {
    const icons = {
        info: "ℹ",
        warning: "⚠",
        success: "✓",
        error: "✕"
    };
    return icons[type] || "ℹ";
}

function formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return "Vừa xong";
    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút trước`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} giờ trước`;

    return date.toLocaleDateString("vi-VN");
}

async function openNotificationDetail(notifId) {
    try {
        const res = await fetch(`/api/notifications/${notifId}`);
        const notif = await res.json();

        modalNotificationTitle.textContent = notif.title;
        modalNotificationMessage.textContent = notif.message;
        modalNotificationTime.textContent = new Date(notif.created_at).toLocaleString("vi-VN");
        notificationModal.classList.add("show");
        notificationModal.setAttribute("aria-hidden", "false");
        notificationDropdown.classList.remove("show");
        loadNotifications();
    } catch (err) {
        console.error("Lỗi lấy chi tiết thông báo:", err);
        alert("Không thể tải chi tiết thông báo");
    }
}

function hideNotificationModal() {
    notificationModal.classList.remove("show");
    notificationModal.setAttribute("aria-hidden", "true");
}

async function markAllAsRead() {
    try {
        await fetch("/api/notifications/read-all", {
            method: "PUT"
        });
        loadNotifications();
    } catch (err) {
        console.error("Lỗi cập nhật:", err);
        alert("Không thể cập nhật trạng thái");
    }
}

function toggleNotificationDropdown() {
    notificationDropdown.classList.toggle("show");

    if (notificationDropdown.classList.contains("show")) {
        loadNotifications();
    }
}

document.addEventListener("click", (e) => {
    if (!inboxButton.contains(e.target) && !notificationDropdown.contains(e.target)) {
        notificationDropdown.classList.remove("show");
    }
});

inboxButton.addEventListener("click", toggleNotificationDropdown);
markAllReadBtn.addEventListener("click", markAllAsRead);
closeNotificationModalButton.addEventListener("click", hideNotificationModal);

notificationModal.addEventListener("click", (e) => {
    if (e.target === notificationModal) {
        hideNotificationModal();
    }
});

loadNotifications();
