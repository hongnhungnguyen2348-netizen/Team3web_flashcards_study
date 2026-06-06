// Lấy các phần tử cần điều khiển trên giao diện quiz.
const startBtn = document.querySelector(".start-btn");
const exitBtn = document.querySelector(".exit-btn");
const continueBtn = document.querySelector(".continue-btn");
const main = document.querySelector(".main");
const popupInfo = document.querySelector(".popup-info");
const pageWrapper = document.querySelector(".page-wrapper");

// Mở khung hướng dẫn khi người dùng bắt đầu quiz.
startBtn.addEventListener("click", () => {
    popupInfo.classList.add("active");
    main.classList.add("active");
    pageWrapper.classList.add("active");
});

// Đóng khung hướng dẫn và đưa trang chủ về trạng thái bình thường.
exitBtn.addEventListener("click", () => {
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    pageWrapper.classList.remove("active");
});

// Chuẩn bị cho phần xử lý tiếp theo của video.
continueBtn.addEventListener("click", () => {
    console.log("Continue quiz clicked - ready for next step.");
});
