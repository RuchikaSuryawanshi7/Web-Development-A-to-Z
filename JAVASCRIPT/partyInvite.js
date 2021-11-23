var guest = ["ruchika", "Vikram", "Software-Eng", "Kazak"];
var guestName = prompt("Enter your Name:");
if (guest.includes(guestName)) {
  alert("Welcome to Party!! " + guestName);
} else {
  alert("Sorry!! you are not invited. ");
}
