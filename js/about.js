const slides = document.querySelectorAll('.slide');
let currentIdx = 0;

// 초기 슬라이드 설정
slides[0].classList.add('active');

function showNextSlide() {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
}

// 3000ms (3초) 마다 함수 실행
setInterval(showNextSlide, 5000);

const dots = document.querySelectorAll('.dot');

function showNextSlide() {
    // 1. 현재 활성 상태 제거
    slides[currentIdx].classList.remove('active');
    dots[currentIdx].classList.remove('active');

    // 2. 인덱스 업데이트
    currentIdx = (currentIdx + 1) % slides.length;

    // 3. 다음 슬라이드 및 점 활성화
    slides[currentIdx].classList.add('active');
    dots[currentIdx].classList.add('active');
}

// 6초마다 슬라이드 변경 (요청하신 6000ms 유지)
setInterval(showNextSlide, 5000);

// 버튼 클릭 시 이벤트 처리 예시
document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', (e) => {
        alert(e.target.textContent + '를 클릭했습니다!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 슬라이드 기능
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIdx = 0;

    function showNextSlide() {
        slides[currentIdx].classList.remove('active');
        dots[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % slides.length;
        slides[currentIdx].classList.add('active');
        dots[currentIdx].classList.add('active');
    }
    setInterval(showNextSlide, 6000);
});


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            const elements = document.querySelectorAll(".card");

            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("show");
                }, index * 150);
            });

        }
    });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));