//1 - Check connection to html page
console.log("connected")

//Psuedocode from the demo video
//List of global variables
	//wins
	//losses
//Start a round with:
	//Generate a random number between 19 to 120 for matchNum variable.
		//use JQuery to display matchNum in the ranNum div.
				//matchNum = $('#ranNum');
	//Generate a random number between 1 to 12 for rubyNum - diamondNum - sapphireNum - emeraldNum
		//function numGenerator(){}
			//These variables created within bigger function:
				//rubyNum
				//diamondNum
				//sapphireNum
				//emeraldNum
	//yourScore is populated by the clicks on each gem image.
		//function gemAdder(){}
			//capture in the variable yourScore the value of the image clicked each time
			//use JQuery to display yourScore in the yourScore div
				//yourScore = $('yourScore');
			//yourScore needs to be compared against the matchNum each time.
			//This variable created by user clicks -> yourScore
			//if less than -> another click is allowed.
		//End function with:
			//else match than -> count win, reset matchNum and gems.
				//use JQuery to display win in the win div
					//
			//else more than -> count loss, reset matchNum and gems and start a new round.
				//use JQuery to display loss in the loss div
					//
//Considerations
	//The variable for each gem would need to be held within the function for each gem.
	



