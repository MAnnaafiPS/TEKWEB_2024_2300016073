let selectedColor = "";
let isDarkMode = false;

function changeColor() {
    const select = document.getElementById("color-select");
    selectedColor = select.value;

    if (!isDarkMode) {
        document.body.style.backgroundColor = selectedColor;
        document.getElementById('container').style.backgroundColor = selectedColor;
        document.getElementById('containerpicture').style.backgroundColor = selectedColor;
        document.getElementById('projects').style.backgroundColor = selectedColor;
        document.getElementById('project').style.backgroundColor = selectedColor;
        document.getElementById('project2').style.backgroundColor = selectedColor;
        document.getElementById('contact').style.backgroundColor = selectedColor;
    }
}

function toggleDarkMode() {
    if (isDarkMode) {
        document.body.style.backgroundColor = selectedColor;
        document.getElementById('container').style.backgroundColor = selectedColor;
        document.getElementById('containerpicture').style.backgroundColor = selectedColor;
        document.getElementById('projects').style.backgroundColor = selectedColor;
        document.getElementById('project').style.backgroundColor = selectedColor;
        document.getElementById('project2').style.backgroundColor = selectedColor;
        document.getElementById('contact').style.backgroundColor = selectedColor;
        document.body.style.color = "black"; // Kembali ke warna teks default
        isDarkMode = false;
    } else {
        document.body.style.backgroundColor = "rgb(12, 12, 12)";
        document.getElementById('container').style.backgroundColor = "rgb(12, 12, 12)";
        document.getElementById('containerpicture').style.backgroundColor = "rgb(12, 12, 12)";
        document.getElementById('projects').style.backgroundColor = "rgb(12, 12, 12)";
        document.getElementById('project').style.backgroundColor = "rgb(12, 12, 12)";
        document.getElementById('project2').style.backgroundColor = "rgb(12, 12, 12)";
        document.getElementById('contact').style.backgroundColor = "rgb(12, 12, 12)";
        document.body.style.color = "white";
        isDarkMode = true;
    }
}

function changeFontSize(size) {
    const elements = document.querySelectorAll('.container, .projects, .containerpicture, .contact');
    elements.forEach(element => {
        element.style.fontSize = size + "px";
    });
    document.getElementById("font-size-display").textContent = size;
}

function toggleFontOptions() {
    const fontOptions = document.getElementById("font-options");
    fontOptions.classList.toggle("hidden");
}

let currentFontIndex = 0;
const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia'];

function toggleFontStyle() {
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    const selectedFont = fonts[currentFontIndex];

    const elements = document.querySelectorAll('.container, .projects, .containerpicture, .contact');
    elements.forEach(element => {
        element.style.fontFamily = selectedFont;
    });
}
