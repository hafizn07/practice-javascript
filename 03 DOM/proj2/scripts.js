
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");


const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var colorElement = getBGColor(pink)

const magicColorChanger = (element, colorElement) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = colorElement
    })
}

magicColorChanger(red, getBGColor(red))
magicColorChanger(cyan, getBGColor(cyan))
magicColorChanger(violet, getBGColor(violet))
magicColorChanger(orange, getBGColor(orange))
magicColorChanger(pink, getBGColor(pink))