let flashcards = JSON.parse(localStorage.getItem('flashcards_library')) || [];
let learnedIds = JSON.parse(localStorage.getItem('learned_ids')) || [];
let currentIndex = 0;
let currentCard = null;

function saveData() {
    localStorage.setItem('flashcards_library', JSON.stringify(flashcards));
    localStorage.setItem('learned_ids', JSON.stringify(learnedIds));
}

function getStudyCards() {
    return flashcards;
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

function renderCurrentCard() {
    const studyCards = getStudyCards();
    if (studyCards.length === 0 || currentIndex >= studyCards.length) {
        showCompletion();
        return;
    }
    currentCard = studyCards[currentIndex];
    const studyArea = document.getElementById('study-area');
    studyArea.innerHTML = `
        <div class="flashcard" id="flashcard">
            <div class="term">${escapeHtml(currentCard.term)}</div>
            <div class="definition">${escapeHtml(currentCard.definition)}</div>
            <div class="flip-indicator">tap to flip</div>
        </div>
    `;
    document.getElementById('current-index').textContent = currentIndex + 1;
    document.getElementById('total-cards').textContent = studyCards.length;
    const progress = (currentIndex / studyCards.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    const flashcard = document.getElementById('flashcard');
    flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
    flashcard.classList.remove('flipped');
}

function markAsLearned() {
    if (!currentCard) return;
    if (!learnedIds.includes(currentCard.id)) {
        learnedIds.push(currentCard.id);
        saveData();
        showToast('✅ Đã đánh dấu "Đã nhớ"!', 'rgba(67,200,100,0.92)');
        nextCard();
    } else {
        showToast('ℹ️ Thẻ này đã được đánh dấu rồi!', 'rgba(247,151,30,0.9)');
    }
}

function markAsNotLearned() {
    if (!currentCard) return;
    if (learnedIds.includes(currentCard.id)) {
        learnedIds = learnedIds.filter(id => id !== currentCard.id);
        saveData();
        showToast('🔄 Đã chuyển thành "Chưa nhớ" (sẽ ôn lại sau)!', 'rgba(246,79,89,0.9)');
    } else {
        showToast('ℹ️ Thẻ này đang ở trạng thái chưa nhớ rồi!', 'rgba(247,151,30,0.9)');
    }
}

function nextCard() {
    const studyCards = getStudyCards();
    if (currentIndex < studyCards.length - 1) {
        currentIndex++;
        renderCurrentCard();
    } else {
        showCompletion();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        renderCurrentCard();
    } else {
        showToast('📖 Đây là thẻ đầu tiên!', 'rgba(247,151,30,0.9)');
    }
}

function showCompletion() {
    const learned = learnedIds.length;
    const total = flashcards.length;
    document.getElementById('study-area').innerHTML = `
        <div class="completion-card">
            <h2>🎉 Hoàn thành!</h2>
            <p style="font-size: 1.4rem; margin: 1rem 0; color: var(--text);">Bạn đã học xong ${total} thẻ</p>
            <p style="color: #a78bfa;">Đã nhớ: ${learned}/${total} thẻ</p>
            ${learned < total
                ? `<p style="color: #ff8a92; margin-top: 6px;">Còn ${total - learned} thẻ chưa nhớ, hãy ôn lại nhé!</p>`
                : `<p style="color: #5effa0; margin-top: 6px;">🌟 Tuyệt vời! Bạn đã nhớ hết! 🌟</p>`
            }
            <div class="nav-buttons" style="margin-top: 2rem;">
                <button class="nav-btn" id="restart-btn">🔄 Học lại từ đầu</button>
                <a href="library.html" class="nav-btn" style="text-decoration: none; text-align: center;">📚 Về thư viện</a>
            </div>
        </div>
    `;
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            currentIndex = 0;
            renderCurrentCard();
        });
    }
}

function resetProgress() {
    if (confirm('Reset tiến độ học? (tất cả thẻ sẽ chuyển thành "Chưa nhớ")')) {
        learnedIds = [];
        saveData();
        currentIndex = 0;
        renderCurrentCard();
        showToast('🔄 Đã reset tiến độ học!', 'rgba(247,151,30,0.9)');
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

document.getElementById('next-btn').addEventListener('click', nextCard);
document.getElementById('prev-btn').addEventListener('click', prevCard);
document.getElementById('mark-learned-btn').addEventListener('click', markAsLearned);
document.getElementById('mark-not-learned-btn').addEventListener('click', markAsNotLearned);

const resetBtn = document.createElement('button');
resetBtn.className = 'nav-btn reset';
resetBtn.textContent = '🔄 Reset tiến độ';
resetBtn.addEventListener('click', resetProgress);
document.querySelector('.nav-buttons').appendChild(resetBtn);

if (flashcards.length === 0) {
    document.getElementById('study-area').innerHTML = `
        <div class="completion-card">
            <h2>📭 Chưa có thẻ nào!</h2>
            <p>Hãy quay lại <a href="library.html" style="color:#a78bfa;">Thư viện</a> để thêm thẻ trước nhé.</p>
        </div>
    `;
    document.getElementById('nav-buttons').style.display = 'none';
} else {
    renderCurrentCard();
}