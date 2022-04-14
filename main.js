let $ = document
let btn = $.querySelector(".btn")
let btnOpen = $.querySelector(".bi-binoculars")
let search = $.getElementById("search")
let close = $.querySelector(".close")
let header = $.querySelector("header")
let input = $.getElementById("input")
let isClose = true

close.style.display = "none"
btn.addEventListener("click", () => {
    isClose = false
    btn.style.color = "rgb(0, 98, 255)"
    close.style.display = "block"
    input.style.width = "350px"
    btnOpen.classList.replace("bi-binoculars", "bi-search")
})
close.addEventListener("click", () => {
    isClose = true
    btnOpen.classList.replace("bi-search","bi-binoculars")
    btn.style.color = "black"
    input.style.width = "50px"
    input.value = ""
})