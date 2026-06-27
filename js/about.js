const slides = document.querySelectorAll('.slide');
let currentIdx = 0;

slides[0].classList.add('active');

function showNextSlide() {
    slides[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % slides.length;
    slides[currentIdx].classList.add('active');
}

setInterval(showNextSlide, 5000);

const dots = document.querySelectorAll('.dot');

function showNextSlide() {
    slides[currentIdx].classList.remove('active');
    dots[currentIdx].classList.remove('active');

    currentIdx = (currentIdx + 1) % slides.length;

    slides[currentIdx].classList.add('active');
    dots[currentIdx].classList.add('active');
}

setInterval(showNextSlide, 5000);

document.querySelectorAll('.button-group button').forEach(button => {
    button.addEventListener('click', (e) => {
        alert(e.target.textContent + '를 클릭했습니다!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
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