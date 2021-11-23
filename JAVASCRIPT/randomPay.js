function whosPaying(names) {
  var randomNo = Math.random() * names.length;
  var no = Math.round(randomNo);
  //console.log(no)
  return names[no] + " is going to buy lunch today!";
}
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(names);
