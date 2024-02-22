$(document).ready(function () {
  $('#generateButton').click(function() {
    generateSpiritAnimal();
  });

  function generateSpiritAnimal() {
    var name = $('#name').val();
    var reversedName = name.split('').reverse().join('');
    var spiritAnimals = ['Wolf', 'Eagle', 'Dolphin', 'Bear', 'Fox', 'Tiger', 'Lion', 'Hawk', 'Owl', 'Panther'];
    var randomSpiritAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
    var output = $('#output');
    output.html("<p>Your spirit animal is: " + randomSpiritAnimal + "</p>");
    output.append("<p>Your left handed name: " + reversedName + "</p>");
  }
});
