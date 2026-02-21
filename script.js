let thrivingList = [];
let strugglingList = [];

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thrivingCount");
let strugglingCount = document.getElementById("strugglingCount");

const allCardsSection = document.getElementById("allCards");
console.log(allCardsSection.children.length);
const mainContainer = document.querySelector("main");

const thrivingFilterBtn = document.getElementById("thriving-filter-btn");
const strugglingFilterBtn = document.getElementById("struggling-filter-btn");
const allFilterBtn = document.getElementById("all-filter-btn");
const filteredSection = document.getElementById("filtered-section");

function calcCount() {
  total.innerText = allCardsSection.children.length;
  thrivingCount.innerText = thrivingList.length;
  strugglingCount.innerText = strugglingList.length;
}
calcCount();

function toggleStyle(id) {
  if (id === "thriving-filter-btn") {
    thrivingFilterBtn.classList.remove("btn-outline");
    strugglingFilterBtn.classList.add("btn-outline");
    allFilterBtn.classList.add("btn-outline");
    allCardsSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
  } else if (id === "struggling-filter-btn") {
    strugglingFilterBtn.classList.remove("btn-outline");
    thrivingFilterBtn.classList.add("btn-outline");
    allFilterBtn.classList.add("btn-outline");
    thrivingFilterBtn.classList.add("btn-outline");
    allCardsSection.classList.add("hidden");
  } else if (id === "all-filter-btn") {
    allCardsSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
    allFilterBtn.classList.remove("btn-outline");
    thrivingFilterBtn.classList.add("btn-outline");
  }
}

mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("thrive-btn")) {
    const parentNode = e.target.parentNode.parentNode.parentNode;
    const plantCard = parentNode.querySelector(".card-title").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const currentStatus = parentNode.querySelector(".current-status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    const latinName = document.querySelector(".latin-name").innerText;
    parentNode.querySelector(".current-status").innerHTML = `Thrive`;

    const cardInfo = {
      plantCard,
      light,
      water,
      currentStatus: "Thrive",
      notes,
      latinName,
    };

    const plantExist = thrivingList.find(
      (item) => item.plantCard == cardInfo.plantCard,
    );

    if (!plantExist) {
      thrivingList.push(cardInfo);
    }
    renderThriving();
    calcCount();
  }
});

function renderThriving() {
  filteredSection.innerHTML = "";

  for (let thrive of thrivingList) {
    console.log(thrive);
    let div = document.createElement("div");
    div.className = "card bg-base-100 shadow-sm";
    div.innerHTML = `
    
                    <div class="flex justify-around">
                    <div class="card-body">
                        <h2 class="card-title">
                            ${thrive.plantCard}
                        </h2>
                        <p class="latin-name text-neutral-400">${thrive.latinName}</p>
                        <div>
                            <div class="light badge badge-soft">${thrive.light}</div>
                            <div class="water badge badge-soft">${thrive.water}</div>
                        </div>
                        <div class="current-status badge badge-warning">
                            <svg class="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <g fill="currentColor">
                                    <path
                                        d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
                                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5"></path>
                                    <line x1="9" y1="6.5" x2="9" y2="10" fill="none" stroke="currentColor"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line>
                                    <path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z"
                                        fill="currentColor" data-stroke="none" stroke="none"></path>
                                </g>
                            </svg>
                            ${thrive.currentStatus}
                        </div>
                        <p class="notes">${thrive.notes}</p>
                        <div class="card-actions">
                            <div class="btn btn-success btn-outline">Thriving</div>
                            <div class="btn btn-warning btn-outline">Struggling</div>
                        </div>
                    </div>
                    <div class="p-5">
                        <button id="delete" class="btn btn-error">Delete</button>
                    </div>
                </div>
    
    `;
    filteredSection.appendChild(div);
  }
}
