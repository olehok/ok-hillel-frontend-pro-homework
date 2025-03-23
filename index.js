// На сторінці є дві кнопки. При натисканні на першу кнопку користувач
// повинен ввести в prompt посилання, при натисканні на другу
// – переадресовується на інший сайт (за раніше введеним посиланням).

const btnGetLink = document.createElement("button");
btnGetLink.innerText = "push to paste a link";
document.body.appendChild(btnGetLink);

const btnFollowLink = document.createElement("button");
btnFollowLink.innerText = "follow the link";
document.body.appendChild(btnFollowLink);

let userLink = "";

btnGetLink.addEventListener("click", () => {
    userLink = prompt("paste a link");
})

btnFollowLink.addEventListener("click", () => {
    location.href = userLink;
    userLink = "";
})