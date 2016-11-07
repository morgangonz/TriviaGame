$(document).ready(function(){

//array of 5 T/F questions
var triviaQuestions = [
		//q0
		{
			question: 'Sharks rarely stop swimming',
			answer: 'True',
			message: 'True, most shark species will drown if they stop swimming. The do not have the muscles they need to pump water through their mouth and over their gills.',
		},
		//q1
		{
			question: 'If you never enter the ocean, you\'re safe from shark attacks.',
			answer: 'False',
			message: 'False, Bull sharks, one of the more aggressive species, have a fondness for freshwater. They have been spotted in bays, lagoons and rivers thousands of miles inland.',
		},
		//q2
		{
			question: 'Shark attacks are one of the most common events among floridians.',
			answer: 'False',
			message: 'False, Getting struck by lightning along with many other crazy deaths are more common than getting eaten by a Shark. In reality, sharks are as afraid of us as we are them.',
		},
		//q3
		{
			question: 'Great Whites are the worlds largest sharks.',
			answer: 'False',
			message: 'False, Whale Sharks are the world\'s largest shark species, they can get up to 47,000lbs and grow over 45 feet long. However, they are gentle giants!!!',
		},
		//q4
		{
			question: 'Sharks are older than dinosuars.',
			answer: 'True',
			message: 'True, They have been on the earth for over 400 million years, they predate practically everything that has a spine, including humans and dinosaurs.',
		}
];

//set variables to hold score

	var questionNumber = 0;	

	var correct = 0;

	var incorrect = 0;

	var timeout = 0;


//new fn to display questions into specified div
questionDisplay();
function questionDisplay() {
		$('#answerDiv').empty();
		$(".questionDiv").html(triviaQuestions[questionNumber].question);	
	};


//when either button is clicked run THIS fn
$(".btn").on('click', function(){
	if ($(this).html() == triviaQuestions[questionNumber].answer){
		//add one to each var
		questionNumber++
		correct++
		answerDisplay()
	}		else {
		questionNumber++;
		incorrect++
		answerDisplay()
	}
});

//displays object answer for 5 seconds
function answerDisplay() {
	$(".questionDiv").empty();
	$('#answerDiv').html(triviaQuestions[questionNumber-1].message);
	setTimeout(questionDisplay,8000);
};


//timer attempt
//set counter to 30

var timeInterval = 10 
	
	//when either button gets clicked run the stop fn
	$('.btn').on('click', stop);

//run fn and decrease by 1 second
function run(){
	counter = setInterval(decrement, 1000);
}	

//decrease number by one interval
function decrement(){
		timeInterval--;
		$('.seconds').html('<h3>' + timeInterval + '</h3>');

		if (timeInterval ===0){
			stop();
				alert('Time\'s up!');
		}
}
 
//stop fn
function stop (){
	clearInterval(counter);
}

//begin run fn 

run();



//this closing tag to line one. 
	});









