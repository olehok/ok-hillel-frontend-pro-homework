// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір.
// При повторному натисканні – повертається попередній колір

const styles = document.createElement("style");
styles.textContent = `
    .red {color: red;}
    .btn {background: grey; color: white; padding: 5px; display: inline-block; cursor: pointer;}
`;
document.head.appendChild(styles);

const text = document.createElement('p');
text.innerText = 'colored text';
document.body.appendChild(text);

const button = document.createElement("div");
button.innerText = 'change the color';
button.classList.add('btn');
document.body.appendChild(button);

button.addEventListener('click', () => text.classList.toggle('red'));