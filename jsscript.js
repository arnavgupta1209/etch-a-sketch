/* getting nodes */
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const sizebutton = document.querySelector(".sizebutton");

function makeDivs(n) {
    /* making lines */
    for (let i = 0; i < n; i++) {
        const line = document.createElement("div");
        line.classList.add("lines");

        for (let j = 0; j < n*2; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixels");
            line.appendChild(pixel);
        }
        content.appendChild(line);
    }
}


makeDivs(16);

sizebutton.addEventListener("click", () => {
    let size = +(prompt("Size of square?"));
    const lines = document.querySelectorAll(".lines");
    for (let i = 0; i < lines.length; i++){
        content.removeChild(lines[i])
    }
    makeDivs(size);
    const allpixels = document.querySelectorAll(".pixels");
    allpixels.forEach(currentValue => {
        currentValue.addEventListener("mouseenter", () => {
            changeColor(currentValue);
        })
    })
})


function changeColor(div) {
    div.classList.add("colorChange");
    console.log("change color")
}

const allpixels = document.querySelectorAll(".pixels");


allpixels.forEach(currentValue => {
    currentValue.addEventListener("mouseenter", () => {
        changeColor(currentValue);
    })
})

/*
allpixels.forEach((pixel) => {
    pixel.addEventListener("mouseleave", () => {
        changeColor(pixel);
    })
})
*/