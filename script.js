function scrollDown() {
    window.scrollBy({
        top: 300, // Płynne przewinięcie w dół
        behavior: 'smooth'
    });
}

// Pokazuje lub ukrywa strzałkę
window.addEventListener("scroll", function() {
    let scrollArrow = document.getElementById("scrollArrow");
    if (window.scrollY > 50) { 
        scrollArrow.classList.add("hidden"); // Ukrywa strzałkę
    } else {
        scrollArrow.classList.remove("hidden"); // Pokazuje strzałkę
    }
});