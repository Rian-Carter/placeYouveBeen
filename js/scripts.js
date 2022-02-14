// Business Logic
function Places(location, landMarks, timeOfYear, notes) {
  this.location = location;
  this.landMarks = landMarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

let place1 = new Places ("Portland", "Bridge", "1998", "It's always raining.");
let place2 = new Places ("Hawaii", "Volcano", "2004", "Its always hot here.");
let place3 = new Places ("Australia", "Sydney Opera Dome", "1976", "Its always pleasant this time of year.");
let place4 = new Places ("Sweden", "The first IKEA", "1975", "I ate a lot of meatballs and stinky fish.");
let place5 = new Places ("The Moon", "Big craters", "1969", "I had a lot of me time.");




$(document).ready(function() {
  $("#portland").click(function() {
    // event.preventDefault();
  $(".print").text(place1.location + " " + place1.landMarks + " " + place1.timeOfYear + " " + place1.notes);
  $(".print2").hide();
  });

  $("#hawaii").click(function() {
    // event.preventDefault();
  $(".print2").text(place2.location + " " + place2.landMarks + " " + place2.timeOfYear + " " + place2.notes);
  }); 
  
  // $(".print").click(function() {
  //   $(".print").toggle();
  //   $(".test").toggle();
  // }
});

   // $("#portland").hide();
    // $("#hawaii").hide();
    // $("#australia").hide();
    // $("#sweden").hide();
    // $("#theMoon").hide();
