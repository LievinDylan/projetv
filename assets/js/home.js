
const pReveal = document.querySelector(".know-more");
const pHomepage = document.querySelector(".paraph-homepage");
const pInfo = document.querySelector(".paraph-info")
const closeButton = document.querySelector(".close");

pHomepage.classList.remove("hidden")
setTimeout(()=> {
    pHomepage.classList.toggle("appear")
}, 1000)

pReveal.addEventListener("click",() => {
    pReveal.classList.toggle("hidden");
    pInfo.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
})

closeButton.addEventListener("click", () => {
    pReveal.classList.toggle("hidden");
    pInfo.classList.toggle("hidden");
    closeButton.classList.toggle("hidden");
})
