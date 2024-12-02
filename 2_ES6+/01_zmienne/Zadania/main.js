if (true) {
	let a = "A";
	const b = "B";
	var c = "C";
}

let one = 1;
const two = 2;
var three = 3;

function testVars() {
	let dog = "pekińczyk";
	const cat = "syjamski";
	var chomik = "syryjski";
	return [dog, cat, chomik]
}

console.log(one, two, three)
console.log(testVars())
c !== undefined && console.log(c);

/*
Wnioski:
*/

// a i b są przypisane do scopa instr. warunkowej if true. Nie wywołamy ich poza tym scopem.
//	deklaracja przez var powoduje dostępo poza scopem