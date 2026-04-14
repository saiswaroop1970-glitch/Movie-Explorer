function showDetails(title, desc) {
  document.getElementById("details").innerHTML =
    "<h2>" + title + "</h2><p>" + desc + "</p>";
}

function goToBooking(event) {
  event.stopPropagation();
  window.location.href = "booking.html";
}

function searchMovie() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let movies = ["inception", "avengers", "interstellar", "Varanasi"];

  if (movies.includes(input)) {
    document.getElementById("result").innerText = "Movie found!";
  } else {
    document.getElementById("result").innerText = "Movie not found";
  }
}

function bookTicket() {
  document.getElementById("bookingMsg").innerText =
    "✅ Booking Confirmed!";
}
function openTrailer(url) {
  document.getElementById("trailerModal").style.display = "block";
  document.getElementById("trailerFrame").src = url;
}

function closeTrailer() {
  document.getElementById("trailerModal").style.display = "none";
  document.getElementById("trailerFrame").src = "";
}

function goToPayment() {
  window.location.href = "payment.html";
}

function makePayment() {
  document.getElementById("paymentMsg").innerText =
    "✅ Payment Successful!";
}
function openTrailerBtn(event, url) {
  event.stopPropagation(); // prevents card click conflict
  openTrailer(url);
}