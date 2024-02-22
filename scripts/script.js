$(document).ready(function () {
  function generateSpiritAnimal() {
  var name = document.getElementById("name").value;
  var reversedName = name.split('').reverse().join('');
  var spiritAnimals = ['Wolf', 'Eagle', 'Dolphin', 'Bear', 'Fox', 'Tiger', 'Lion', 'Hawk', 'Owl', 'Panther'];
  var randomSpiritAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
  var output = document.getElementById("output");
  output.innerHTML = "<p>Your spirit animal is: " + randomSpiritAnimal + "</p>";
  output.innerHTML += "<p>Your left handed name: " + reversedName + "</p>";
}
});
