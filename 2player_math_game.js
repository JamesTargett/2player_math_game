var player1Lives = 3;
var player2Lives = 3;

var currentPlayer = 1;

while ((player1Lives > 0) && (player2Lives > 0)) {
	if (currentPlayer === 1) {
		console.log("Player 1. Your turn.");
	} else {
		console.log("Player 2. Your turn.");
	}
	
	var x = Math.floor(Math.random() * 20);
	var y = Math.floor(Math.random() * 20);
	var op = Math.floor(Math.random() * 3);
	if (op === 1) {
		op = "added to";
	} else if (op === 2) {
		op = "subtracted by";
	} else {
		op = "multiplied by";
	}

	answer = prompt("Player " + currentPlayer + ": " + "What is " + x + " " + op + " " + y + "?");
	if (op === 1) {
		correctAnswer = x + y;
	} else if (op === 2) {
		correctAnswer = x - y;
	} else {
		correctAnswer = x * y;
	}

	if (answer != correctAnswer) {
		if (currentPlayer === 1) {
			player1Lives = player1Lives - 1;
			console.log("Lose a life. You have " + player1Lives + " remaining.");
		} else {
			player2Lives = player2Lives - 1;
			console.log("Lose a life. You have " + player2Lives + " remaining.");
		}
	}


	break;
};