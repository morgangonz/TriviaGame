$(document).ready(function(){

	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered = 0;
	var setNumber = 1;


//array of 5 T/F questions
var triviaQuestions = 
				 ['Sharks rarely stop swimming', 
				'If you never enter the ocean, you are safe from shark attacks.',
				'Shark attacks are one of the most common events among floridians.',
				'Great Whites are the worlds largest sharks.',
				'Sharks are older than dinosuars.',];

	//to display questions in above array

	var questionNumber = 0;	

$(".questionDiv").html(triviaQuestions[questionNumber])	

var checkQuestion = function(questionNum){

}

//question0
		$("#trueBtn").click(function(){
			if (questionNumber == questionNum){
				console.log("correct!");
				
				//moves and displays next question
					questionNumber++;

					$(".questionDiv").html(triviaQuestions[questionNumber])	
				} else {
					console.log("Incorrect!");

				} 
		$("#falseBtn".click(function(){

})
//question1	
		
			if (questionNumber == 1){
				console.log("correct!");
				
				//moves and displays next question
					questionNumber++;

					$(".questionDiv").html(triviaQuestions[questionNumber])	
				} else {
					console.log("Incorrect!");

				} 
			
//question2
			if (questionNumber == 2){
				console.log("correct!");
				
				//moves and displays next question
					questionNumber = questionNumber + 1;

					$(".questionDiv").html(triviaQuestions[questionNumber])	
				} else {
					console.log("Incorrect!");

				} 

//question3
			if (questionNumber == 3){
				console.log("correct!");
				
				//moves and displays next question
					questionNumber = questionNumber + 1;

					$(".questionDiv").html(triviaQuestions[questionNumber])	
				} else {
					console.log("Incorrect!");

				} 

//question4
			if (questionNumber == 4){
				console.log("correct!");
				
				//moves and displays next question
					questionNumber = questionNumber + 1;

					$(".questionDiv").html(triviaQuestions[questionNumber])	
				} else {
					console.log("Incorrect!");

				} 				
	//final closing tag	
			})


/*for (var i = triviaQuestions.length - 1; i >= 0; i++) {
	triviaQuestions[i]

function answerTrue(){
	if (#true) documnet.getElementById(".answers").innerHTML = "Correct." 
else documnet.getElementByID(".answers").innerHTML = "Incorrect."		
}


}
 list one question at a time, display T/F buttons.
If answer is true and user clicks true, .on('click') display "correct" + reasoning.
Else display "wrong/False" and proper reasoning. 

find a way to show only one question at a time. After answer, 
display next question btn to move on?


use css to make correct choice green and incorrect choice red.

*/

})


//timer attempt

// var timeInterval = setInterval (function()), 30); 
// var secondsSpan = clock.querySelector('.seconds');

// function updateClock(){
// 	var = getTimeRemaining(endtime);

// 	clock.innerHTML = 'seconds:' + t.seconds;

// 	secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

// 		if(t.seconds == 0){
// 			clearInterval(timeInterval);
// 		}
// }





