//1 - Check connection to html page
console.log("js for crystal game connected")

//Psuedocode based on the requirements from demo video
//List of global variables
	var wins = 0;
	var losses = 0;
//Start a round with:

$(".btn-lg").on("click", function() {
	//Generate a random number between 19 to 120 for matchNum variable.
	var matchNum = Math.floor(Math.random() * 120) + 19;
	console.log("The number to match is " + matchNum);
	//use JQuery to display matchNum in the ranNum div.
	//matchNum = $('#ranNum');
	$("#ranNum").html(matchNum);
	//Generate a random number between 1 to 12 for rubyNum - diamondNum - sapphireNum - emeraldNum
	var rubyNum = Math.floor(Math.random() * 12) + 1;
	console.log("The number for ruby is " + rubyNum);
	var diamondNum = Math.floor(Math.random() * 12) + 1;
	console.log("The number for diamond is " + diamondNum);
	var sapphireNum = Math.floor(Math.random() * 12) + 1;
	console.log("The number for sapphire is " + sapphireNum);
	var emeraldNum = Math.floor(Math.random() * 12) + 1;
	console.log("The number for emerald is " + emeraldNum);
	var yourScore = 0;
		//yourScore is populated by the clicks on each gem image.
		//function gemAdder(){}
		 $("#ruby").on("click", function() {
		 	//capture in the variable yourScore the value of the image clicked each time
		 	var latestClick = yourScore+rubyNum; 
		 	console.log("The number for the latestClick variable is " + latestClick);
		 	//use JQuery to display yourScore in the yourScore div
		 	$("#yourScore").html(latestClick);
		 });

		 $("#diamond").on("click", function() {
		 	//capture in the variable yourScore the value of the image clicked each time
		 	var latestClick = yourScore+diamondNum; 
		 	console.log("The number for the latestClick variable is " + latestClick);
		 	//use JQuery to display yourScore in the yourScore div
		 	$("#yourScore").html(latestClick);
		 });		

 		$("#sapphire").on("click", function() {
		 	//capture in the variable yourScore the value of the image clicked each time
		 	var latestClick = yourScore+sapphireNum; 
		 	console.log("The number for the latestClick variable is " + latestClick);
		 	//use JQuery to display yourScore in the yourScore div
		 	$("#yourScore").html(latestClick);
		 });

		$("#emerald").on("click", function() {
		 	//capture in the variable yourScore the value of the image clicked each time
		 	var latestClick = yourScore+emeraldNum; 
		 	console.log("The number for the latestClick variable is " + latestClick);
		 	//use JQuery to display yourScore in the yourScore div
		 	$("#yourScore").html(latestClick);
		 });
			
			//yourScore needs to be compared against the matchNum each time.
			//This variable created by user clicks -> yourScore
			//if less than -> another click is allowed.
			//if(yourScore < matchNum)
		//End function with:
			//else match than -> count win, reset matchNum and gems.
				//if(yourScore === matchNum);
				//use JQuery to display win in the win div
				$("#winCount").html(wins);
			//else more than -> count loss, reset matchNum and gems and start a new round.
				//use JQuery to display loss in the loss div
				$("#lossCount").html(losses);
});
//Considerations
	//The variable for each gem would need to be held within the function for each gem.
//Alternative:
	//Can yourScore be an object that has ruby, diamond, sapphire, and emerald events?