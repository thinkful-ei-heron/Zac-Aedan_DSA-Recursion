// 1. Counting Sheep
// Program input: number of sheep
// Program output: display number with message
// Call input: sheep left
// Call output: display number with message
function countSheep(sheep) {
	if (sheep === 0) console.log('All sheep jumped over the fence');
	else {
		console.log(`${sheep}: Another sheep jumps over the fence`);
		countSheep(sheep - 1);
	}

}

// countSheep(3);


// 2. Power Calculator
// Program input: Base integer and positive exponent integer
// Program output: Base raised to power of exponent
// Call input: Base and multiplies remaining
// Call output: Product of base
function powerCalc(base, exp) {
	if (exp < 0) return 'exponent should be >= 0';
	if (exp === 0) return 1;
	return base * powerCalc(base, exp - 1);
}

// console.log(powerCalc(10,2));


// 3. Reverse String
// Program input: String
// Program output: Reversed string
// Call input: Remaining string
// Call output: Single character
function revString(str) {
	if (str.length === 1) return str;
	return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

// console.log(revString('pizza?'));


// 4. nth Triangular Number
// Program input: Integer
// Program output: Triangular number
// Call input: Row number
// Call output: Sum
function triNum(num) {
	if (num === 1) return 1;
	return num + triNum(num - 1);
}

// console.log(triNum(8));


// 5. String Splitter
// Program input: String with separators '/'
// Program output: Split array
// Call input: Remaining string
// Call output: Array
function strSplitter(str) {
	const cut = str.indexOf('/');
	if (cut === -1) return [str];
	return [str.slice(0, cut), ...strSplitter(str.slice(cut + 1))];
}

// console.log(strSplitter('02/20/2020'));


// 6. Fibonacci
// Program input: Integer
// Program output: Fibonacci sequence
// Call input: Integer
// Call output: Display iteration
function fib(count, numA = 1, numB = 1) {
	console.log(numA);
	if (count === 1) return numA + numB;
	fib(count - 1, numB, numA + numB);
}

// console.log(fib(7));


// 7. Factorial
// Program input: Integer
// Program output: Factorial of input
// Call input: Integer
// Call output: Factorial of input
function fact(num) {
	if (num === 1) return 1;
	return num * fact(num - 1);
}

// console.log(fact(5));


// 8. Find a way out of the maze
// Program input: Array of arrays
// Program output: String of characters representing direction
// Call input: Array
// Call output: String
let mySmallMaze = [
	[' ', ' ', ' '],
	[' ', '*', ' '],
	[' ', ' ', 'e']
];
let maze = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let escape = false;
function wayOut(arr, x = 0, y = 0, path = [], direction = '', place = 0) {
	if (escape) return;
	// Check bounds
	if (
		x < 0 || y < 0
		|| x > arr[0].length - 1 || y > arr.length - 1
		|| arr[y][x] === '*'
	) return;

	path[place] = direction;
	place++;

	if (arr[y][x] === 'e') {
		escape = true;
		console.log(path.slice(1));
	}

	if (arr[y][x] === ' ') {
		arr[y][x] = '*';

		// Check left
		wayOut(arr, x - 1, y, path, 'L', place);
		// Check right
		wayOut(arr, x + 1, y, path, 'R', place);
		// Check up
		wayOut(arr, x, y - 1, path, 'U', place);
		// Check down
		wayOut(arr, x, y + 1, path, 'D', place);
	}

	place--;
}

// wayOut(maze);


// 9. Find ALL the ways out of the maze
// Program input: Array of arrays
// Program output: List of strings of characters representing direction
// Call input: Array
// Call output: String
function allWaysOut(arr, x = 0, y = 0, path = [], direction = '', place = 0) {
	// Check bounds
	if (
		x < 0 || y < 0
		|| x > arr[0].length - 1 || y > arr.length - 1
		|| arr[y][x] === '*'
	) return;

	path[place] = direction;
	place++;

	if (arr[y][x] === 'e') {
		console.log(`Path to the exit: ${path.slice(1)}`);
	}

	if (arr[y][x] === ' ') {
		arr[y][x] = '*';

		// Check left
		allWaysOut(arr, x - 1, y, path, 'L', place);
		// Check right
		allWaysOut(arr, x + 1, y, path, 'R', place);
		// Check up
		allWaysOut(arr, x, y - 1, path, 'U', place);
		// Check down
		allWaysOut(arr, x, y + 1, path, 'D', place);

		arr[y][x] = ' ';
	}

	place--;
}

// allWaysOut(maze);


// 10: Anagrams
// Program input: String
// Program output: Array of strings
// Call input: String
// Call output: Single character
const anaList = [];

function anagrams(str, prefix = '') {
	if (str.length === 1) anaList.push(prefix + str);
	for (let i = 0; i < str.length; i++) {
		anagrams(
			str.substring(0, i) + str.substring(i + 1),
			prefix + str.substring(i, i + 1)
		);
	}
}

anagrams('east');
// console.log(`${anaList.length} anagrams: ${anaList}`);


// 11. Organization Chart
// Program input: Object
// Program output: Indented readout
// Call input: Object
// Call output: Value of key
const chart = {
	Zuckerberg: {
		Schroepfer: {
			Bosworth: {
				Steve: {},
				Kyle: {},
				Andra: {}
			},
			Zhao: {
				Richie: {},
				Sofia: {},
				Jen: {}
			}
		},
		Schrage: {
			VanDyck: {
				Sabrina: {},
				Michelle: {},
				Josh: {}
			},
			Swain: {
				Blanch: {},
				Tom: {},
				Joe: {}
			}
		},
		Sandberg: {
			Goler: {
				Eddie: {},
				Julie: {},
				Annie: {}
			},
			Hernandez: {
				Rowi: {},
				Inga: {},
				Morgan: {}
			},
			Moissinac: {
				Amy: {},
				Chuck: {},
				Vinni: {}
			},
			Kelley: {
				Eric: {},
				Ana: {},
				Wes: {},
			}
		}
	}
}

function orgChart(obj, layer = 0) {
	let tab = '\t'.repeat(layer);
	Object.keys(obj).forEach(key => {
		console.log(tab + key);
		orgChart(obj[key], layer + 1)
	});
}

// orgChart(chart);


// 12. Binary Representation
// Program input: Positive integer
// Program output: Binary representation of input
// Call input: Integer remaining
// Call output: Bit representation
function binary(num) {
	const binaryRep = (num) => {
		if (num === 0) return '';
		const mod = num % 2;
		return binaryRep((num - mod) / 2) + `${mod}`;
	}
	if (num === 0) return '0';
	return binaryRep(num);
}

// console.log(binary(25));