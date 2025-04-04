// Пишемо свій слайдер зображень, який повинен:
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const itemCollection = [{
    id: 1,
    img: "./image14/04c_Page_006.jpg",
    name: "Column1",
},
    {
        id: 2,
        img: "./image14/04c_Page_098.jpg",
        name: "Column2",
    },
    {
        id: 3,
        img: "./image14/04c_Page_003.jpg",
        name: "Column3",
    },
    {
        id: 4,
        img: "./image14/04c_Page_074.jpg",
        name: "Column4",
    },
    {
        id: 5,
        img: "./image14/04c_Page_040.jpg",
        name: "Column5",
    },
];

const slider = document.querySelector(".slider");
const itemContainer = document.querySelector(".item_container");
const dotContainer = document.querySelector(".container_dot");
const buttonPrev = document.querySelector("#button_prev");
buttonPrev.style.display = "none";
const buttonNext = document.querySelector("#button_next");
let currentIndex = 0;

function dots() {
    itemCollection.forEach(() => {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        dotContainer.appendChild(dot);
    })
}

function renderItem() {
    itemCollection.forEach((itemIC) => {
        let item = document.createElement("div");
        item.classList.add("item");
        item.setAttribute("data-id", itemIC.id);
        item.innerHTML = `
        <div class="container_img">
            <img src=${itemIC.img} alt="column">
        </div>
        <h3>${itemIC.name}</h3>
        `;
        itemContainer.appendChild(item);
    })
}

function showSlide(index) {
    itemContainer.querySelectorAll('.item').forEach(item =>
        item.style.display = 'none');
    dotContainer.querySelectorAll('.dot').forEach(dot =>
        dot.classList.remove("active"));
    itemContainer.children[index].style.display = 'block';
    dotContainer.children[index].classList.add("active");
}

function hideSlideButtons(currentIndex) {
    currentIndex > 0 ?
        buttonPrev.style.display = "block" : buttonPrev.style.display = "none";

    currentIndex < itemCollection.length - 1 ?
        buttonNext.style.display = "block" : buttonNext.style.display = "none";
}

dots(0)
renderItem();
showSlide(0);

slider.addEventListener("click", (e) => {
    if (e.target.closest("#button_next")) {
        currentIndex++;
        hideSlideButtons(currentIndex);
        showSlide(currentIndex);
    }

    if (e.target.closest("#button_prev")) {
        currentIndex--;
        hideSlideButtons(currentIndex);
        showSlide(currentIndex);
    }

    if (e.target.classList.contains("dot")) {
        const dots = Array.from(dotContainer.children);
        const index = dots.indexOf(e.target);
        if (index !== -1) {
            currentIndex = index;
            hideSlideButtons(currentIndex);
            showSlide(currentIndex);
        }
    }
});