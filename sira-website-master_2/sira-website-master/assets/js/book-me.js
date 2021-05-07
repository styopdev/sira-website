// Get the modal
let reservationBookMe = document.getElementById("reservation-book-me");
let workWithMeBookMe = document.getElementById("work-with-me-book-me");
let whoIsThisForItemBookMe = document.getElementById("who-is-this-for-item-book-me");

// Get the button that opens the modal
let btnReservationBookMe = document.getElementById("btn-reservation-book-me");
let btnWorkWithMeBookMe = document.getElementById("btn-work-with-me-book-me");
let btnWhoIsThisForItemBookMe = document.getElementById("btn-who-is-this-for-item-book-me");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let close = document.getElementsByClassName("btn-success")[0];

// When the user clicks the button, open the modal 
btnReservationBookMe.onclick = function () {
  reservationBookMe.style.display = "block";
}
btnWorkWithMeBookMe.onclick = function () {
  workWithMeBookMe.style.display = "block";
}
btnWhoIsThisForItemBookMe.onclick = function () {
  whoIsThisForItemBookMe.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  reservationBookMe.style.display = "none";
}

close.onclick = function () {
  workWithMeBookMe.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == reservationBookMe) {
    reservationBookMe.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == workWithMeBookMe) {
    workWithMeBookMe.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == whoIsThisForItemBookMe) {
    whoIsThisForItemBookMe.style.display = "none";
  }
}
