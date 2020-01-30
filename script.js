/*Javascript file for Final Project*/
/*Tomas A Quiroz*/

/*variables*/
var histButton = document.querySelector(".history-button");
var techButton = document.querySelector(".tech-button");
var psychButton = document.querySelector(".psych-button");
var histStuff = document.querySelector(".history-stuff");
var techStuff = document.querySelector(".tech-stuff");
var psychStuff = document.querySelector(".psych-stuff");


/*function*/
function showhist()
{
	histStuff.className = "history-stuff show";
	techStuff.className = "tech-stuff";
	psychStuff.className = "psych-stuff"
}
function showtech()
{
	techStuff.className = "tech-stuff show";
	histStuff.className = "history-stuff";
	psychStuff.className = "psych-stuff";
}
function showpsych()
{
	psychStuff.className = "psych-stuff show";
	histStuff.className = "history-stuff";
	techStuff.className = "tech-stuff";
}

/*event listeners*/
histButton.addEventListener("click",showhist,false);
techButton.addEventListener("click",showtech,false);
psychButton.addEventListener("click",showpsych,false);