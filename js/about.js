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
setInterval(showNextSlide, 6000);