//1 - Check connection to html page
console.log("js for crystal game connected")

//Psuedocode based on the requirements from demo video
//List of global variables
	var wins = 0;
	var losses = 0;
//Start a round with:

$(".btn-lg").on("click", function() {
	//Generate a random number between 19 to 120 for targetNumber variable.
	var targetNumber = Math.floor(Math.random() * 120) + 19;
	console.log("The number to match is " + targetNumber);
	$("#targetNumber").html(targetNumber);

	var counter = 0;
	var imageCrystal = $("#crystal-image");

	var rubyNum = Math.floor(Math.random() * 12) + 1;
	console.log("The ruby random number is " + rubyNum);
	imageCrystal.attr("data-crystalvalue", rubyNum);

	var diamondNum = Math.floor(Math.random() * 12) + 1;
	console.log("The diamond random number is " + diamondNum);
	imageCrystal.attr("data-crystalvalue", diamondNum);

	var sapphireNum = Math.floor(Math.random() * 12) + 1;
	console.log("The sapphire random number is " + sapphireNum);
	imageCrystal.attr("data-crystalvalue", sapphireNum);

	var emeraldNum = Math.floor(Math.random() * 12) + 1;
	console.log("The emerald random number is " + emeraldNum);
	imageCrystal.attr("data-crystalvalue", emeraldNum);


	$("#crystal-image").on("click", function() {
		var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);
    	counter += crystalValue;
    	$("#yourScore").html(counter);
    	if (counter === targetNumber) {
      		alert("You win!");
      		$("#winCount").html(wins);
    	}

    	else if (counter >= targetNumber) {
      		alert("You lose!");
      		$("#lossCount").html(losses);
    	}
    });			
});
//Considerations
	//The variable for each gem would need to be held within the function for each gem.
//Alternative:
	//Can yourScore be an object that has a ruby, diamond, sapphire, and emerald method?