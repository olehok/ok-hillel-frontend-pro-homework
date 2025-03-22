// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення, отримане випадковим чином (Math.random)

let image = document.getElementById("randomImage");

const btn = document.createElement("div");
btn.style.cursor = "pointer";
btn.innerText = "change the pic";
document.body.append(btn);

btn.addEventListener("click", function () {
    const min = 1;
    const max = 9;
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(random);
    image.src = `image/${random}.png`
});