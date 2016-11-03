$(documnet).ready(function(){

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
				'Sharks are older than dinosuars.',]

	//to display questions in above array

	questionNumber = 0;	

$("questionDiv").html(triviaQuestions[questionNumber])	

		$('button').click(function(){
			if (questionNumber == 0){

				if($(this).html() == "True") {
					alert ("Correct!")
					//moves and displays next question
					questionNumber = questionNumber + 1;

					$("#questionDiv").html(triviaQuestions[questionNumber])

				} else {
					alert ("Incorrect!")

					$("#questionDiv").html(triviaQuestions[questionNumber])
				}
			}

		}	
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
