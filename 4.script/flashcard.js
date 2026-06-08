// Trang học đọc dữ liệu từ localStorage do trang thư viện đã lưu.
const STORAGE_KEY = "flashstudy_collections";
const SELECTED_KEY = "flashstudy_selected_collection";

const backButton = document.getElementById("backButton");
const progressText = document.getElementById("progressText");
const collectionTitle = document.getElementById("collectionTitle");
const flipCard = document.getElementById("flipCard");
const frontContent = document.getElementById("frontContent");
const backContent = document.getElementById("backContent");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const collections = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
const selectedCollectionId = localStorage.getItem(SELECTED_KEY);
const activeCollection = collections.find((collection) => collection.id === selectedCollectionId);
const cards = activeCollection?.cards || [];

let currentIndex = 0;
const studyStatus = new Array(cards.length).fill("");

initializeStudyPage();

// Khởi tạo nội dung ban đầu của trang học.
function initializeStudyPage() {
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

// Đánh dấu trạng thái học tập của thẻ hiện tại.
function markCurrentCard(status) {
    if (cards.length === 0) {
        return;
    }

    studyStatus[currentIndex] = status;
    rememberedButton.classList.toggle("active", status === "remembered");
    forgotButton.classList.toggle("active", status === "forgot");
}

backButton.addEventListener("click", () => {
    window.location.href = "index.html";
});

flipCard.addEventListener("click", toggleFlipCard);
prevButton.addEventListener("click", showPreviousCard);
nextButton.addEventListener("click", showNextCard);
rememberedButton.addEventListener("click", () => markCurrentCard("remembered"));
forgotButton.addEventListener("click", () => markCurrentCard("forgot"));
