const text = "Why Are You Programming?";
const typingElement = document.getElementById("typing");

let index = 0;

function typing() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typing, 100);
    }
}

typing();

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.5
    }
);

const fadeElements = document.querySelectorAll(".fade-up");

fadeElements.forEach((element) => {
    observer.observe(element);
});