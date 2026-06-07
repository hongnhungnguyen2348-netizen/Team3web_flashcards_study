// Khóa lưu trữ dùng chung giữa trang thư viện và trang học flashcard.
const STORAGE_KEY = "flashstudy_collections";
const SELECTED_KEY = "flashstudy_selected_collection";

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

let collections = loadCollections();
let selectedCollectionId = collections[0]?.id || "";
let currentEditingId = "";
let editingCardIndex = -1;

renderCollections();

// Chuyển đổi giao diện chính mà không cần tải lại trang.
function showPage(pageName) {
    Object.values(pages).forEach((page) => page.classList.remove("active"));
    pages[pageName].classList.add("active");

    document.querySelectorAll(".nav-item").forEach((item) => {
        const isEditorButton = pageName === "editor" && item.id === "openCreateModal";
        item.classList.toggle("active", item.dataset.page === pageName || isEditorButton);
    });
}

// Nạp dữ liệu từ localStorage; nếu chưa có dữ liệu thì tạo bộ mẫu để giao diện đầy đủ.
function loadCollections() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        return JSON.parse(savedData);
    }

    const sampleCollections = [
        {
            id: "sample-english",
            name: "Từ vựng tiếng Anh",
            status: "Đang học",
            cards: [
                { term: "Ambition", definition: "Khát vọng hoặc mục tiêu mạnh mẽ muốn đạt được." },
                { term: "Consistency", definition: "Sự kiên trì và đều đặn khi thực hiện một việc." },
                { term: "Curiosity", definition: "Sự tò mò, mong muốn tìm hiểu điều mới." }
            ]
        },
        {
            id: "sample-history",
            name: "Lịch sử Việt Nam",
            status: "Đã nhớ",
            cards: [
                { term: "Chiến thắng Bạch Đằng", definition: "Trận thủy chiến quan trọng gắn với chiến thuật cọc gỗ trên sông." },
                { term: "Cách mạng tháng Tám", definition: "Sự kiện lịch sử năm 1945 mở ra thời kỳ độc lập dân tộc." }
            ]
        },
        {
            id: "sample-math",
            name: "Công thức Toán học",
            status: "Đang học",
            cards: [
                { term: "Diện tích hình tròn", definition: "S = πr², với r là bán kính hình tròn." },
                { term: "Định lý Pythagoras", definition: "Trong tam giác vuông: a² + b² = c²." }
            ]
        }
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleCollections));
    return sampleCollections;
}

// Lưu lại toàn bộ bộ sưu tập sau mỗi thao tác thêm/xóa để trang học đọc được dữ liệu mới nhất.
function saveCollections() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collections));
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

// Tạo bộ sưu tập mới, lưu vào localStorage và chuyển sang giao diện nhập flashcard.
function createFolder() {
    const folderName = folderNameInput.value.trim();

    if (!folderName) {
        modalError.textContent = "Vui lòng nhập tên thư mục trước khi tạo.";
        return;
    }

    const newCollection = {
        id: `collection-${Date.now()}`,
        name: folderName,
        status: "Đang học",
        cards: []
    };

    collections.unshift(newCollection);
    selectedCollectionId = newCollection.id;
    currentEditingId = newCollection.id;
    editingCardIndex = -1;
    saveCollections();
    renderCollections();

    editorModeLabel.textContent = "Bộ flashcard mới";
    editorTitle.textContent = folderName;
    termInput.value = "";
    definitionInput.value = "";
    resetCardForm();
    renderCreatedCards();

    hideCreateModal();
    showPage("editor");
}

// Lưu flashcard mới hoặc cập nhật flashcard đang được chỉnh sửa.
function addFlashcard() {
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

    if (editingCardIndex >= 0) {
        collection.cards[editingCardIndex] = { term, definition };
    } else {
        collection.cards.push({ term, definition });
    }

    saveCollections();
    renderCollections();
    resetCardForm();
    renderCreatedCards();
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
    editorModeLabel.textContent = "Chỉnh sửa bộ flashcard";
    editorTitle.textContent = collection.name;
    resetCardForm();
    renderCollections();
    renderCreatedCards();
    showPage("editor");
}

// Xóa bộ sưu tập đang chọn khỏi thư viện.
function deleteSelectedCollection() {
    const collection = getSelectedCollection();

    if (!collection) {
        alert("Vui lòng chọn một bộ sưu tập trước.");
        return;
    }

    const isConfirmed = confirm(`Bạn có chắc muốn xóa bộ sưu tập "${collection.name}" không?`);

    if (!isConfirmed) {
        return;
    }

    collections = collections.filter((item) => item.id !== selectedCollectionId);
    selectedCollectionId = collections[0]?.id || "";
    saveCollections();
    renderCollections();
}

// Chuyển sang trang học flashcard riêng, trang đó sẽ đọc id bộ được chọn từ localStorage.
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

    localStorage.setItem(SELECTED_KEY, collection.id);
    window.location.href = "flashcard.html";
}

// Đưa dữ liệu của thẻ cần sửa lên form nhập liệu.
function startEditCard(index) {
    const collection = collections.find((item) => item.id === currentEditingId);

    if (!collection || !collection.cards[index]) {
        return;
    }

    editingCardIndex = index;
    termInput.value = collection.cards[index].term;
    definitionInput.value = collection.cards[index].definition;
    addCardButton.textContent = "Lưu chỉnh sửa";
    cancelEditCardButton.classList.add("show");
    renderCreatedCards();
    termInput.focus();
}

// Xóa một flashcard khỏi bộ đang chỉnh sửa.
function deleteCard(index) {
    const collection = collections.find((item) => item.id === currentEditingId);

    if (!collection || !collection.cards[index]) {
        return;
    }

    const isConfirmed = confirm("Bạn có chắc muốn xóa flashcard này không?");

    if (!isConfirmed) {
        return;
    }

    collection.cards.splice(index, 1);
    saveCollections();
    renderCollections();
    resetCardForm();
    renderCreatedCards();
}

// Reset form về chế độ thêm thẻ mới.
function resetCardForm() {
    editingCardIndex = -1;
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
