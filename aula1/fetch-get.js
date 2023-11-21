const response = await fetch("http://localhost:3001/test");
const user = await response.json();
// user = { name: <string>, age: <integer> }

console.log("Seu nome é", user.name);
console.log("E sua idade é", user.age);
