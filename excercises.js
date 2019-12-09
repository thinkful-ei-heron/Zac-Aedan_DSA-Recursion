// 1. Counting Sheep
// Program input: number of sheep
// Program output: display number with message
// Call input: sheep left
// Call output: display number with message
function countSheep(sheep) {
	if (sheep === 0) console.log('All sheep jumped over the fence');
	else {
		console.log(`${sheep}: Another sheep jumps over the fence`);
		countSheep(sheep-1);
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
	return base*powerCalc(base, exp-1);
}

// console.log(powerCalc(10,2));


// 3. Reverse String
// Program input: String
// Program output: Reversed string
// Call input: Remaining string
// Call output: Single character
function revString(str) {
	if (str.length === 1) return str;
	return str[str.length-1] + revString(str.slice(0, str.length-1));
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
	if (!str.length) return [];
	if (str[0] === '/') return [str.slice(1)];
	return [strSplitter(str.slice(1))];
}

console.log(strSplitter('02/20/2020'));


// 6. Fibonacci
// Program input: Integer
// Program output: Fibonacci sequence
// Call input: Integer
// Call output: Display iteration
function fib(count, numA=1, numB=1) {
	console.log(numA);
	if (count === 1) return numA + numB;
	fib(count-1, numB, numA + numB);
}

// console.log(fib(7));


// 7. Factorial
// Program input: Integer
// Program output: Factorial of input
// Call input: Integer
// Call output: Factorial of input
function fact(num) {
	if (num === 1) return 1;
	return num*fact(num-1);
}

// console.log(fact(5));


// 12. Binary Representation
// Program input: Positive integer
// Program output: Binary representation of input
// Call input: Integer remaining
// Call output: Bit representation
function binaryRep(num) {
	if (num === 0) return '';
	const mod = num % 2;
	return binaryRep((num - mod) / 2) + `${mod}`;
}

console.log(binaryRep(0));