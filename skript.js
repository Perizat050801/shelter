import pets from "./pets.json" assert { type : "json"};

console.log(pets);

const imgPetOne = document.querySelector(".pets-katrine");
const namePetOne = document.querySelector(".name-Katrine");
const imgPetTwo = document.querySelector(".pets-jennifer");
const namePetTwo = document.querySelector(".name-Jennifer");
const imgPetThree = document.querySelector(".pets-woody");
const namePetThree = document.querySelector(".name-Woody");

let index = 0;

function displayPets() {
imgPetOne.src = pets[index].img;
namePetOne.textContent = pets[index].name;

imgPetTwo.src = pets[index + 1].img;
namePetTwo.textContent = pets[index + 1].name;

imgPetThree.src = pets[index + 2].img;
namePetThree.textContent = pets[index + 2].name;
}

/////////////////////// Right

const arrowRight = document.querySelector(".arrow-right");
arrowRight.addEventListener("click", showNextPets);

function showNextPets() {
index++;
displayPets();
}

///////////////////////// Left

const arrowLeft = document.querySelector(".arrow-left");
arrowLeft.addEventListener("click", showBackPets);

function displayBackPets() {
imgPetOne.src = pets[index].img;
namePetOne.textContent = pets[index].name;

imgPetTwo.src = pets[index - 1].img;
namePetTwo.textContent = pets[index - 1].name;

imgPetThree.src = pets[index - 2].img;
namePetThree.textContent = pets[index - 2].name;
}

function showBackPets() {
index--;
displayBackPets();
}

//////////////////////////////////// * MODAL




// let currentIndex = 0
// const LeftButton = document.querySelector(".left-button");
// const cards = document.querySelectorAll(".our-friends__pets");
// const RightButton = document.querySelector(".right-button");

// function showCards() {
//   for (let i = 0; i < cards.length; i++) {
//     if (i >= currentIndex && i < currentIndex + 3) {
//       cards[i].style.display = "block";
//     } else {
//       cards[i].style.display = "none";
//     }
//   }
// }

// function showNext() {
//   if (currentIndex + 3 < cards.length) {
//     currentIndex = currentIndex + 1;
//   } else {
//     currentIndex = 0;
//   }
//   showCards();
// }

// function showPrevious() {
//   if (currentIndex > 0) {
//     currentIndex = currentIndex - 1;
//   } else {
//     currentIndex = cards.length - 3;
//   }
//   showCards();
// }

// LeftButton.addEventListener("click", showPrevious);
// RightButton.addEventListener("click", showNext);

// showCards();