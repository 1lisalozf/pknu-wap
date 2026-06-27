const cards = document.querySelectorAll(".project-card");

cards.forEach((card, index) => {
    const button = card.querySelector(".bookmark-btn");

    // 저장된 상태 불러오기
    const saved = localStorage.getItem(`bookmark-${index}`);

    if (saved === "true") {
        button.classList.add("active");
        button.textContent = "★";
    }

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.textContent = "★";
            localStorage.setItem(`bookmark-${index}`, true);
        } else {
            button.textContent = "☆";
            localStorage.setItem(`bookmark-${index}`, false);
        }

    });
});

const filterBtn = document.getElementById("showBookmarks");
let showingBookmarks = false;

filterBtn.addEventListener("click", () => {

    showingBookmarks = !showingBookmarks;

    cards.forEach((card, index) => {

        const saved = localStorage.getItem(`bookmark-${index}`);

        if (showingBookmarks) {

            if (saved !== "true") {
                card.style.display = "none";
            }

        } else {

            card.style.display = "block";

        }
    });

    filterBtn.textContent = showingBookmarks
        ? "전체 프로젝트 보기"
        : "북마크만 보기";
});