const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-inner input");
const cardsContainer = document.querySelector(".content-main__list");

const cards = [
  {
    id: 0,
    title: "Пвх материал 2й сорт",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    imagePath: "./images/foto.jpeg"
  },
  {
    id: 1,
    title: "Металлический каркас",
    price: "4500 ₽",
    address: "Москва, р-н Центральный",
    date: "12 июля 15:20",
    imagePath: "./images/foto.jpeg"
  },
  {
    id: 2,
    title: "Лист фанеры 1й сорт",
    price: "1200 ₽",
    address: "Санкт-Петербург, р-н Петроградский",
    date: "9 июля 09:15",
    imagePath: "./images/foto.jpeg"
  },
  {
    id: 3,
    title: "Бетонные блоки",
    price: "300 ₽",
    address: "Нижний Новгород, р-н Советский",
    date: "11 июля 13:45",
    imagePath: "./images/foto.jpeg"
  },
  {
    id: 4,
    title: "Трубы ПВХ для канализации",
    price: "700 ₽",
    address: "Екатеринбург, р-н Ленинский",
    date: "8 июля 10:30",
    imagePath: "./images/foto.jpeg"
  },
  {
    id: 5,
    title: "Утеплитель минеральный",
    price: "950 ₽",
    address: "Новосибирск, р-н Октябрьский",
    date: "13 июля 16:50",
    imagePath: "./images/foto.jpeg"
  }
];

const render = (arrayCards) => {
  cardsContainer.innerHTML = "";

  arrayCards.forEach((card) => {
    cardsContainer.insertAdjacentHTML("beforeend", `
        <a href="/product.html?id=${card.id}" class="content-main__list-item">
                  <div class="content-main__list-item--img">
                    <img src="${card.imagePath}" alt="card-img" />
                  </div>
                  <h5 class="content-main__list-item--title">
                    ${card.title}
                  </h5>

                  <strong class="content-main__list-item--price">${card.price}</strong>
                  <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${card.address}</span>
                    <span class="content-main__list-item--desc">${card.date}</span>
                  </div>
                </a>
      `);
  });
};

render(cards);

const getFilteredCardsArray = (array, inputText) => {
  return array.filter((card) => {
    return card.title.toLowerCase().includes(inputText.toLowerCase()) ||
      card.address.toLowerCase().includes(inputText.toLowerCase())
  });
};

searchBtn.addEventListener("click", () => {
  render(getFilteredCardsArray(cards, searchInput.value));
});