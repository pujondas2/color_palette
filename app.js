const palleteList = document.querySelector('.pallete-list');
const refreshBtn = document.querySelector('.refresh-btn');

const palleteBoxes = 10;

const generatePallete = () => {
    palleteList.innerHTML = "";

    for (let i = 0; i < palleteBoxes; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart("6", 0)}`;
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;
        color.addEventListener("click", () => copyColor(color, randomHex))
        palleteList.appendChild(color);
    }
}

generatePallete();

const copyColor = (element, hexValue) => {
    const colorElement = element.querySelector('.hex-value');
    navigator.clipboard.writeText(hexValue).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexValue , 1000)
    })
}

refreshBtn.addEventListener('click', generatePallete);