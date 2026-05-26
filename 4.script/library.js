let flashcards = JSON.parse(localStorage.getItem('flashcards_library')) || [];
let learnedIds = JSON.parse(localStorage.getItem('learned_ids')) || [];
let editingId = null;

function saveData() {
    localStorage.setItem('flashcards_library', JSON.stringify(flashcards));
    localStorage.setItem('learned_ids', JSON.stringify(learnedIds));
    renderCards();
    updateStats();
}

function showToast(message, bgColor = '#333') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.background = bgColor;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function toggleLearned(id) {
    if (learnedIds.includes(id)) {
        learnedIds = learnedIds.filter(learnedId => learnedId !== id);
        showToast('🔄 Đã chuyển thành "Đang học" (bạn sẽ ôn lại thẻ này)', 'rgba(247,151,30,0.9)');
    } else {
        learnedIds.push(id);
        showToast('✅ Đã chuyển thành "Đã nhớ"!', 'rgba(67,200,100,0.9)');
    }
    saveData();
}

function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
    flashcards.forEach((card, i) => {
        const isLearned = learnedIds.includes(card.id);
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card-item';
        cardDiv.style.animationDelay = `${i * 0.04}s`;
        cardDiv.innerHTML = `
            <div class="card-term">${escapeHtml(card.term)}</div>
            <div class="card-definition">${escapeHtml(card.definition)}</div>
            <div class="card-badge ${isLearned ? 'badge-learned' : 'badge-learning'}" data-id="${card.id}">
                ${isLearned ? '✅ Đã nhớ (click để chuyển thành đang học)' : '📖 Đang học (click để đánh dấu đã nhớ)'}
            </div>
            <div class="card-actions">
                <button class="card-btn edit" data-id="${card.id}">✏️</button>
                <button class="card-btn delete" data-id="${card.id}">🗑️</button>
            </div>
        `;
        cardDiv.querySelector('.card-badge').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLearned(card.id);
        });
        cardDiv.querySelector('.edit').addEventListener('click', (e) => {
            e.stopPropagation();
            openEditModal(card.id);
        });
        cardDiv.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCard(card.id);
        });
        container.appendChild(cardDiv);
    });
}

function addCard() {
    const term = document.getElementById('term-input').value.trim();
    const definition = document.getElementById('definition-input').value.trim();
    if (!term || !definition) {
        showToast('❌ Vui lòng nhập cả thuật ngữ và định nghĩa!', 'rgba(246,79,89,0.9)');
        return;
    }
    flashcards.push({ id: Date.now(), term, definition });
    saveData();
    document.getElementById('term-input').value = '';
    document.getElementById('definition-input').value = '';
    showToast('➕ Đã thêm thẻ mới!', 'rgba(67,200,100,0.9)');
}

function deleteCard(id) {
    if (confirm('Xóa thẻ này?')) {
        flashcards = flashcards.filter(c => c.id !== id);
        learnedIds = learnedIds.filter(l => l !== id);
        saveData();
        showToast('🗑️ Đã xóa thẻ!', 'rgba(246,79,89,0.9)');
    }
}

function deleteAll() {
    if (confirm('⚠️ Xóa TẤT CẢ thẻ? Không thể hoàn tác!')) {
        flashcards = [];
        learnedIds = [];
        saveData();
        showToast('🗑️ Đã xóa tất cả thẻ!', 'rgba(246,79,89,0.9)');
    }
}

function resetLearned() {
    if (confirm('Reset toàn bộ tiến độ học? (tất cả thẻ sẽ chuyển thành "Đang học")')) {
        learnedIds = [];
        saveData();
        showToast('🔄 Đã reset toàn bộ tiến độ!', 'rgba(247,151,30,0.9)');
    }
}

function shuffleCards() {
    flashcards = flashcards.sort(() => Math.random() - 0.5);
    renderCards();
    saveData();
    showToast('🎲 Đã xáo trộn thứ tự thẻ!', 'rgba(108,99,255,0.9)');
}

function updateStats() {
    const total = flashcards.length;
    const learned = learnedIds.length;
    document.getElementById('total-count').textContent = total;
    document.getElementById('learned-count').textContent = learned;
    document.getElementById('learning-count').textContent = total - learned;
}

function openEditModal(id) {
    editingId = id;
    const card = flashcards.find(c => c.id === id);
    if (card) {
        document.getElementById('edit-term').value = card.term;
        document.getElementById('edit-definition').value = card.definition;
        document.getElementById('edit-modal').style.display = 'flex';
    }
}

function saveEdit() {
    const newTerm = document.getElementById('edit-term').value.trim();
    const newDefinition = document.getElementById('edit-definition').value.trim();
    if (!newTerm || !newDefinition) {
        showToast('❌ Vui lòng nhập đầy đủ!', 'rgba(246,79,89,0.9)');
        return;
    }
    const card = flashcards.find(c => c.id === editingId);
    if (card) {
        card.term = newTerm;
        card.definition = newDefinition;
        saveData();
        showToast('✏️ Đã cập nhật thẻ!', 'rgba(67,200,100,0.9)');
    }
    closeModal();
}

function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

document.getElementById('add-btn').addEventListener('click', addCard);
document.getElementById('shuffle-btn').addEventListener('click', shuffleCards);
document.getElementById('reset-learned-btn').addEventListener('click', resetLearned);
document.getElementById('delete-all-btn').addEventListener('click', deleteAll);
document.getElementById('save-edit-btn').addEventListener('click', saveEdit);
document.getElementById('cancel-edit-btn').addEventListener('click', closeModal);

document.getElementById('definition-input').addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') addCard();
});

window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('edit-modal')) closeModal();
});

if (flashcards.length === 0) {
    flashcards = [
        { id: 1, term: "HTML", definition: "HyperText Markup Language - Ngôn ngữ đánh dấu siêu văn bản" },
        { id: 2, term: "CSS", definition: "Cascading Style Sheets - Ngôn ngữ tạo kiểu cho web" },
        { id: 3, term: "JavaScript", definition: "Ngôn ngữ lập trình giúp web tương tác động" },
        { id: 4, term: "React", definition: "Thư viện JavaScript để xây dựng giao diện người dùng" }
    ];
    learnedIds = [1, 2];
    saveData();
}

renderCards();
updateStats();