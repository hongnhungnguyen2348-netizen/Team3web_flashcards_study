// Trang học lấy dữ liệu bộ flashcard từ API backend (/api/flashcards/:id), không còn dùng localStorage.

const backButton = document.getElementById("backButton");
const progressText = document.getElementById("progressText");
const collectionTitle = document.getElementById("collectionTitle");
const flipCard = document.getElementById("flipCard");
const frontContent = document.getElementById("frontContent");
const backContent = document.getElementById("backContent");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const rememberedButton = document.getElementById("rememberedButton");
const forgotButton = document.getElementById("forgotButton");

const selectedCollectionId = new URLSearchParams(window.location.search).get("id");

let activeCollection = null;
let cards = [];
let currentIndex = 0;

initializeStudyPage();

// Lấy bộ flashcard đang chọn từ server rồi khởi tạo nội dung ban đầu của trang học.
async function initializeStudyPage() {
    if (selectedCollectionId) {
        try {
            const res = await fetch(`/api/flashcards/${selectedCollectionId}`);
            const data = await res.json();
            if (data.success) {
                activeCollection = data.collection;
            }
        } catch (err) {
            console.error("Không tải được bộ flashcard:", err);
        }
    }

    cards = activeCollection?.cards || [];

    if (!activeCollection || cards.length === 0) {
        collectionTitle.textContent = "Chưa có flashcard để học";
        frontContent.textContent = "Về thư viện";
        backContent.textContent = "Hãy chọn một bộ sưu tập có thẻ trước khi học.";
        progressText.textContent = "Thẻ 0 / 0";
        prevButton.disabled = true;
        nextButton.disabled = true;
        rememberedButton.disabled = true;
        forgotButton.disabled = true;
        return;
    }

    collectionTitle.textContent = activeCollection.name;
    renderCurrentCard();
}

// Cập nhật mặt trước, mặt sau và tiến độ của thẻ hiện tại.
function renderCurrentCard() {
    const currentCard = cards[currentIndex];

    flipCard.classList.remove("flipped");
    frontContent.textContent = currentCard.term;
    backContent.textContent = currentCard.definition;
    progressText.textContent = `Thẻ ${currentIndex + 1} / ${cards.length}`;
}

// Lật thẻ 180 độ theo chiều ngang khi người dùng click vào thẻ.
function toggleFlipCard() {
    if (cards.length === 0) {
        return;
    }

    flipCard.classList.toggle("flipped");
}

// Chuyển sang thẻ trước và luôn trả thẻ về mặt trước.
function showPreviousCard() {
    if (cards.length === 0) {
        return;
    }

    currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    renderCurrentCard();
}

// Chuyển sang thẻ sau và luôn trả thẻ về mặt trước.
function showNextCard() {
    if (cards.length === 0) {
        return;
    }

    currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    renderCurrentCard();
}


backButton.addEventListener("click", () => {
    window.location.href = "library1.html";
});

flipCard.addEventListener("click", toggleFlipCard);
prevButton.addEventListener("click", showPreviousCard);
nextButton.addEventListener("click", showNextCard);
