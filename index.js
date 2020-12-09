console.log('Task 1.');

const numbers = [];

for (let i = 0; i < 3; i++) {
	const row = [];
	for (let j = 0; j < 5; j++) {
		row.push(Math.floor(Math.random() * 5));
	}
	numbers.push(row);
}


numbers.forEach(row => {
	console.log(row);
});

console.log('Task 2.');

function isRowWin(row) {
	let win = false;

	for (let i = 1; i < 3; i++) {
		win = row[i - 1] === row[i];
		if (!win) {
			break;
		}
	}
	return win;
}

numbers.forEach(row => {
	console.log(isRowWin(row));
});

console.log('Task 3.');

function sumWin(row) {
	let win = false;
	let strike = 1;
	let strikeNumber = row[0] + 0.5;

	for (let i = 1; i < 5; i++) {
		win = row[i - 1] === row[i];
		if (!win) break;
		if (win) {
			strike += 1;
		}
	}

	return strike >= 3 ? strike * strikeNumber : 0;
}

let sum = 0;
numbers.forEach(row => {
	sum += sumWin(row);
});
console.log(sum);
