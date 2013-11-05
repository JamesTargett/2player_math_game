var player1Lives = 3;
var player2Lives = 3;

var currentPlayer = 1;

function promptUser(operator){
	if (operator === 1) {
		operator = "added to";
	} else if (operator === 2) {
		operator = "subtracted by";
	} else {
		operator = "multiplied by";
	}
	return prompt("Player " + currentPlayer + ": " + "What is " + x + " " + operator + " " + y + "?");
}

function changePlayer() {
	if (currentPlayer == 1)
		currentPlayer = 2;
	else
		currentPlayer = 1;
}

while ((player1Lives > 0) && (player2Lives > 0)) {
	if (currentPlayer == 1) {
		console.log("Player 1. Your turn.");
	} else {
		console.log("Player 2. Your turn.");
	}
	
	var x = Math.floor(Math.random() * 20);
	var y = Math.floor(Math.random() * 20);
	var op = Math.floor(Math.random() * 3);
	
	var answer = promptUser(op);

	if (op == 1) {
		correctAnswer = (x + y);
	} else if (op == 2) {
		correctAnswer = (x - y);
	} else {
		correctAnswer = (x * y);
	}

	console.log("answer: " + answer + " correctAnswer: " + correctAnswer);

	if (answer === correctAnswer.toString()) {
		console.log("Right answer. Bet you think you're really smart, huh?")
	} else {
		if (currentPlayer === 1) {
			player1Lives = player1Lives - 1;
			console.log("WRONG!!!!.... (haha). Lose a life. " + player1Lives + " remaining.");
		} else {
			player2Lives = player2Lives - 1;
			console.log("WRONG!!!!.... (haha). Lose a life. " + player2Lives + " remaining.");
		}		
	}

	break;
};