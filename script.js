let total = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugglingCount = document.getElementById("strugglingCount");

const allCardsSection = document.getElementById("allCards");
console.log(allCardsSection.children.length);

function calcCount() {
  total.innerText = allCardsSection.children.length;
}
calcCount();
