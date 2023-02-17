const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")
const body = document.querySelector("body")

let pageSelected = null

const selectedColor = "#FFFFFF"
const hoveredColor = "#444444"
const defaultColor = "#1a1a1a"

page1.addEventListener("click", (e) => {
    page1.style.borderColor = selectedColor
    page2.style.borderColor = defaultColor

    pageSelected = 1
    e.stopPropagation();
})

page1.addEventListener("mouseover", () => {
    if (pageSelected !== 1) {
        page1.style.borderColor = hoveredColor
    }
})

page1.addEventListener("mouseout", () => {
    if (pageSelected !== 1) {
        page1.style.borderColor = defaultColor
    }
})

page2.addEventListener("click", (e) => {
    page1.style.borderColor = defaultColor
    page2.style.borderColor = selectedColor

    pageSelected = 2
    e.stopPropagation();
})

page2.addEventListener("mouseover", () => {
    if (pageSelected !== 2) {
        page2.style.borderColor = hoveredColor
    }
})

page2.addEventListener("mouseout", () => {
    if (pageSelected !== 2) {
        page2.style.borderColor = defaultColor
    }
})

body.addEventListener("click", () => {
    page1.style.borderColor = defaultColor
    page2.style.borderColor = defaultColor
    pageSelected = null
})




