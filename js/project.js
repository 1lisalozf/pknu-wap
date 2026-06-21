<script>

const bookmarkButtons =
document.querySelectorAll(".bookmark-btn");

bookmarkButtons.forEach((button, index) => {

    const saved =
    localStorage.getItem(`bookmark-${index}`);

    if(saved === "true"){
        button.classList.add("active");
    }

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        localStorage.setItem(
            `bookmark-${index}`,
            button.classList.contains("active")
        );

    });

});

</script>