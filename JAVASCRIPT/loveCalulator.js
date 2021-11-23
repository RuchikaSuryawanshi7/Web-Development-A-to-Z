var yourName = prompt("Enter your Name");
var loveoneName = prompt("Enter Name of person you love");
var percent = Math.floor(Math.random() * 100) + 1;
if (percent > 60) {
  alert(
    "Your Love percent is " +
      percent +
      " %. " +
      yourName +
      " and " +
      loveoneName +
      " loves each other.."
  );
} else {
  alert("Your Love percent is " + percent + " %.");
}
