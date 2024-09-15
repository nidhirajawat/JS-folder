const basket1Count = document.querySelector(".basket-1 span");
const secondBasket = document.querySelector(".basket-2 span");

const leftArrow = document.querySelector(".arrow-1");
const rightArrow = document.querySelector(".arrow-2");
let totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = firstBasketAppleCount;

rightArrow.addEventListener("click", () => {});
// basket1Count.innerText = totalApples;
