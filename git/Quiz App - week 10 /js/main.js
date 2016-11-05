var questions = [
{
	question: "What state New York city in?",
	answer: "New York"
},
{
	question: "what`s 50 / 5? ",
	answer: 10
},
{
	question: "who was the 42nd president of United States of America?",
	answer:"Bill Clinton" 
},
{
	question: "Finish this sentence: summer is _______?",
	answer: "coming"
},
{
	question: "Who is the youngest Lannister sibling",
	answer: "tyrion"
},
{
	question: "Where does Jorah Mormont's family live?",
	answer: "bear island"
},
{
	question: "How many dragons does Daenerys Targaryen have?",
	answer: 3
},
{
	question: "How many hands does Jaime Lannister have after book 3?",
	answer: 1
},
{
	question: "Did Tyrion commit regicide or patricide?",
	answer: "both"
},
{
	question: "How many Direwolves do the starks find?",
	answer: 6
}

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}