const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const rgbData = document.querySelector('#rgbData');
const btnRGB01 = document.querySelector('#btnRGB01');
const btnRGB02 = document.querySelector('#btnRGB02');
const btnRGB03 = document.querySelector('#btnRGB03');
const buttons = [btnRGB01, btnRGB02, btnRGB03];
let realButtonIndex;

btn.addEventListener('click', () => {
    const color = randomRGB();
    realButtonIndex = randColorButtonIndex();
    rgbData.textContent = `${color}`;
    btn.textContent = `click below to select`;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = randomRGB();
    }
    buttons[realButtonIndex].style.backgroundColor = color;
});

const randColorNum = () => Math.floor(Math.random() * 256);

const randColorButtonIndex = () => Math.floor(Math.random() * 3);

const randomRGB = () => {
    return `rgb(${randColorNum()}, ${randColorNum()}, ${randColorNum()})`;
}

const trueBodyColor = () => {
    body.style.backgroundColor = buttons[realButtonIndex].style.backgroundColor;
};

const winOrLose = (index) => () => {
    if (realButtonIndex === index) {
        rgbData.textContent = `You are WIN!`;
        btn.innerHTML = `XD`;
    } else {
        rgbData.textContent = `You are LOSE!`;
        btn.textContent = `Boo!`;
    }
    timeForReset();
    trueBodyColor();
}

const timeForReset = () => {
    setTimeout(() => {
        window.location.reload();
    }, 1500)
}

buttons.forEach((element, index) => { element.addEventListener('click', winOrLose(index)) });