const add = (a, b) => a + b; 
const minus = (a, b) => a - b; 
const multi = (a, b) => a * b;
const divide = (a, b) => a / b; 
add(1, 2); 
minus(1, 2); 
let catname: String = "Peenut";

interface Cat {
	name: String;
	age: Number;
	color: String;
}

let Chiun: Cat = {
	name: "Jason",
	age: 12,
	color: "Green"
}

let binofmemory = [99, "Ryu", true]; 

let manything: (Number | String)[] = ["Kingdom Reborn", "Unreal Engine", 999]  

console.log(manything[0]); 
