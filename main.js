// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const prevBtnMobile = document.querySelector("#prev-btn-mobile");
const nextBtnMobile = document.querySelector("#next-btn-mobile");
const book = document.querySelector("#book");
const bookMobile = document.querySelector("#book-mobile");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");

const paper1_mobile = document.querySelector("#p1-mobile");
const paper2_mobile = document.querySelector("#p2-mobile");
const paper3_mobile = document.querySelector("#p3-mobile");
const paper4_mobile = document.querySelector("#p4-mobile");
const paper5_mobile = document.querySelector("#p5-mobile");
const paper6_mobile = document.querySelector("#p6-mobile");
const paper7_mobile = document.querySelector("#p7-mobile");
const paper8_mobile = document.querySelector("#p8-mobile");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

prevBtnMobile.addEventListener("click", goPrevPageMobile);
nextBtnMobile.addEventListener("click", goNextPageMobile);

// Business Logic
let currentLocation = 1;
let currentLocationMobile = 1;
let numOfPapers = 8;
let maxLocation = numOfPapers + 1;
let maxLocationMobile = numOfPapers * 2;

function openBook() {
  book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        break;
      case 5:
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        break;
      case 6:
        paper6.classList.add("flipped");
        paper6.style.zIndex = 6;
        break;
      case 7:
        paper7.classList.add("flipped");
        paper7.style.zIndex = 7;
        break;
      case 8:
        paper8.classList.add("flipped");
        paper8.style.zIndex = 8;
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 8;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 7;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 6;
        break;
      case 5:
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 5;
        break;
      case 6:
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 4;
        break;
      case 7:
        paper6.classList.remove("flipped");
        paper6.style.zIndex = 3;
        break;
      case 8:
        paper7.classList.remove("flipped");
        paper7.style.zIndex = 2;
        break;
      case 9:
        openBook();
        paper8.classList.remove("flipped");
        paper8.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown state");
    }

    currentLocation--;
  }
}

function goPrevPageMobile() {
  if (currentLocationMobile > 1) {
    switch (currentLocationMobile) {
      case 2:
        bookMobile.style.transform = "translateX(0%)";
        paper1_mobile.classList.remove("flipped-mobile");
        paper1_mobile.style.zIndex = 8;
        break;
      case 3:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 4:
        bookMobile.style.transform = "translateX(0%)";
        paper2_mobile.classList.remove("flipped-mobile");
        paper2_mobile.style.zIndex = 7;
        break;
      case 5:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 6:
        bookMobile.style.transform = "translateX(0%)";
        paper3_mobile.classList.remove("flipped-mobile");
        paper3_mobile.style.zIndex = 6;
        break;
      case 7:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 8:
        bookMobile.style.transform = "translateX(0%)";
        paper4_mobile.classList.remove("flipped-mobile");
        paper4_mobile.style.zIndex = 5;
        break;
      case 9:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 10:
        bookMobile.style.transform = "translateX(0%)";
        paper5_mobile.classList.remove("flipped-mobile");
        paper5_mobile.style.zIndex = 4;
        break;
      case 11:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 12:
        bookMobile.style.transform = "translateX(0%)";
        paper6_mobile.classList.remove("flipped-mobile");
        paper6_mobile.style.zIndex = 3;
        break;
      case 13:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 14:
        bookMobile.style.transform = "translateX(0%)";
        paper7_mobile.classList.remove("flipped-mobile");
        paper7_mobile.style.zIndex = 2;
        break;
      case 15:
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 16:
        bookMobile.style.transform = "translateX(0%)";
        paper8_mobile.classList.remove("flipped-mobile");
        paper8_mobile.style.zIndex = 1;
        break;
      case 17:
        bookMobile.style.transform = "translateX(100%)";
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocationMobile--;
  }
}

function goNextPageMobile() {
  if (currentLocationMobile < maxLocationMobile) {
    switch (currentLocationMobile) {
      case 1:
        bookMobile.style.transform = "translateX(100%)";
        paper1_mobile.classList.add("flipped-mobile");
        paper1_mobile.style.zIndex = 1;
        break;
      case 2:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 3:
        bookMobile.style.transform = "translateX(100%)";
        paper2_mobile.classList.add("flipped-mobile");
        paper2_mobile.style.zIndex = 2;
        break;
      case 4:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 5:
        paper3_mobile.classList.add("flipped-mobile");
        paper3_mobile.style.zIndex = 3;
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 6:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 7:
        paper4_mobile.classList.add("flipped-mobile");
        paper4_mobile.style.zIndex = 4;
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 8:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 9:
        paper5_mobile.classList.add("flipped-mobile");
        paper5_mobile.style.zIndex = 5;
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 10:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 11:
        paper6_mobile.classList.add("flipped-mobile");
        paper6_mobile.style.zIndex = 6;
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 12:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 13:
        paper7_mobile.classList.add("flipped-mobile");
        paper7_mobile.style.zIndex = 7;
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 14:
        bookMobile.style.transform = "translateX(0%)";
        break;
      case 15:
        paper8_mobile.classList.add("flipped-mobile");
        paper8_mobile.style.zIndex = 8;
        bookMobile.style.transform = "translateX(100%)";
        break;
      case 16:
        bookMobile.style.transform = "translateX(0%)";
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocationMobile++;
  }
}

// var modal = document.getElementById("videoModal");
// var modalCloseBtn = document.getElementsByClassName("close")[0];
// var playVideoBtn = document.getElementById("video-btn");
// var playVideoBtnMobile = document.getElementById("video-btn-mobile");
// var player = document.getElementById("player");

// playVideoBtn.addEventListener("click", function (e) {
//   player.style.display = "block";
//   playVideoBtn.style.display = "none";
//   if (~player.src.indexOf("?")) player.src += "&autoplay=1";
//   else player.src += "?autoplay=1";
//   e.preventDefault();
// });

// playVideoBtnMobile.addEventListener("click", function (e) {
//   modal.style.display = "flex";
//   if (~player.src.indexOf("?")) player.src += "&autoplay=1";
//   else player.src += "?autoplay=1";
//   e.preventDefault();
// });

// modalCloseBtn.addEventListener("click", (e) => {
//   modal.style.display = "none";
//   e.preventDefault();
// });

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
