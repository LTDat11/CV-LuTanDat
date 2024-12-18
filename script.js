document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded successfully.");

    // Example functionality: Highlight external links
    const links = document.querySelectorAll("a[target='_blank']");
    links.forEach(link => {
        link.style.textDecoration = "underline";
    });

    // Scroll-to-top button (optional)
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = "⬆ Top";
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.bottom = "10px";
    scrollToTopButton.style.right = "10px";
    scrollToTopButton.style.padding = "10px";
    scrollToTopButton.style.backgroundColor = "#0056b3";
    scrollToTopButton.style.color = "white";
    scrollToTopButton.style.border = "none";
    scrollToTopButton.style.borderRadius = "5px";
    scrollToTopButton.style.cursor = "pointer";
    scrollToTopButton.style.display = "none";
    document.body.appendChild(scrollToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});