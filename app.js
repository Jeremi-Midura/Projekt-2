console.log(':)');

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        window.scrollBy({ top: 50, behavior: "smooth" });
    } else if (event.key === "ArrowUp") {
        window.scrollBy({ top: -50, behavior: "smooth" });
    }
});

