const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.style.padding = '.5em 1em';
    button.style.backgroundColor = 'white';
    button.style.borderRadius = '.3rem';
}

function textStyle(property, value) {
    const getText = document.querySelector('#text-area').style;
    (getText[property] === '') ? getText[property] = [value] : getText[property] = '';
}

// bold btn
document.querySelector('#btn-1').addEventListener('click', function () {
    textStyle('fontWeight', 'bold');
});
// italic btn
document.querySelector('#btn-2').addEventListener('click', function () {
    textStyle('fontStyle', 'italic');
});
// underscore btn
document.querySelector('#btn-3').addEventListener('click', function () {
    textStyle('textDecoration', 'underline');
});
// left align btn
document.querySelector('#btn-4').addEventListener('click', function () {
    textStyle('textAlign', 'left');
});
// center align btn
document.querySelector('#btn-5').addEventListener('click', function () {
    textStyle('textAlign', 'center');
});
// right align btn
document.querySelector('#btn-6').addEventListener('click', function () {
    textStyle('textAlign', 'right');
});
// justify btn
document.querySelector('#btn-7').addEventListener('click', function () {
    textStyle('textAlign', 'justify');
});

// font size number input
// enter key event
document.querySelector('#font-size').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const fontSize = document.querySelector('#font-size').value;
        document.querySelector('#text-area').style.fontSize = fontSize + 'px';
    }
});
// click event
document.querySelector('#font-size').addEventListener('click', function (event) {
    const fontSize = event.target.value;
    document.querySelector('#text-area').style.fontSize = fontSize + 'px';
});

// font color (event type input or change)
document.querySelector('#font-color').addEventListener('input', function (event) {
    const fontColor = event.target.value;
    document.querySelector('#text-area').style.color = fontColor;
})