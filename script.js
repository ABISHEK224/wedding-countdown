// Set the wedding date
const weddingDate = new Date("2024-12-30T00:00:00");

// Function to update the countdown
function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (difference < 0) {
    document.getElementById("countdown").innerHTML =
      "<h2>The wedding has started!</h2>";
  }
}

// Update every second
setInterval(updateCountdown, 1000);
