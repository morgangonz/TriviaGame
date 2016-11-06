$(document).ready(function(){

//array of 5 T/F questions
var triviaQuestions = 
				 ['Sharks rarely stop swimming', 
				'If you never enter the ocean, you are safe from shark attacks.',
				'Shark attacks are one of the most common events among floridians.',
				'Great Whites are the worlds largest sharks.',
				'Sharks are older than dinosuars.',];


//array of answers to above questions
var triviaAnswers = 
				['True, most shark species will drown if they stop swimming. The do not have the muscles they need to pump water through their mouth and over their gills.',
				'False, Bull sharks, one of the more aggressive species, have a fondness for freshwater. They have been spotted in bays, lagoons and rivers than can be thousands of miles inland.',
				'False, Getting struck by lightning along with many other crazy deaths are more common than getting eaten by a Shark. IN reality, sharks are just afraid of us as we are them.',
				'False, Whale Sharks are the world\'s largest shark species, they can get up to 47,000lbs or more and span over 45 feet long. However, they are gentle giants!!!',
				'True, They have been on the earth for over 400 million years, they predate practically everything that has a spine, including humans and dinosaurs.',];


	//to display questions in above array

	var questionNumber = 0;	

	var currentAnswerVal = false;

$(".questionDiv").html(triviaQuestions[questionNumber])	

var checkQuestion = function(){

		
			if (questionNumber == triviaQuestions){
				console.log("correct!");
				
				//moves and displays next question
					questionNumber++;

					$(".questionDiv").html(triviaQuestions[questionNumber])	
				} else {
					console.log("Incorrect!");
					questionNumber++;

				} 
		
		$("#trueButton").click(function(){
			currentAnswerVal = true;
				checkQuestion(questionNumber);
		});		

		$("#falseBtn").click(function(){
			currentAnswerVal = false;
				checkQuestion(questionNumber);
			});
	};


//timer attempt

var timeInterval = 30 
var secondsSpan = clock.querySelector('.seconds');

function updateClock(){
	getTimeRemaining(endtime);

clock.innerHTML = '.seconds:' + t.seconds;

secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

if(t.seconds == 0){
	clearInterval(timeInterval);
 
}

}

});

