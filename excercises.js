// // 1. Counting Sheep
// // Program input: number of sheep
// // Program output: display number with message
// // Call input: sheep left
// // Call output: display number with message
// function countSheep(sheep) {
// 	if (sheep === 0) console.log('All sheep jumped over the fence');
// 	else {
// 		console.log(`${sheep}: Another sheep jumps over the fence`);
// 		countSheep(sheep-1);
// 	}
	
// }

// countSheep(3);


// // 2. Power Calculator
// // Program input: Base integer and positive exponent integer
// // Program output: Base raised to power of exponent
// // Call input: Base and multiplies remaining
// // Call output: Product of base
// function powerCalc(base, exp) {
// 	if (exp < 0) return 'exponent should be >= 0';
// 	if (exp === 0) return 1;
// 	return base*powerCalc(base, exp-1);
// }

// console.log(powerCalc(10,2));


// // 3. Reverse String
// // Program input: String
// // Program output: Reversed string
// // Call input: Remaining string
// // Call output: Single character
// function revString(str) {
// 	if (str.length === 1) return str;
// 	return str[str.length-1] + revString(str.slice(0, str.length-1));
// }

// console.log(revString('pizza?'));


// // 4. nth Triangular Number
// // Program input: Integer
// // Program output: Triangular number
// // Call input: Row number
// // Call output: Sum
// function triNum(num) {
// 	if (num === 1) return 1;
// 	return num + triNum(num - 1);
// }

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