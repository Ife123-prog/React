const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];
console.log(copiedNumbers); 

const moreNumbers = [4, 5, 6];
const mergedNumbers = [...numbers, ...moreNumbers];
console.log(mergedNumbers); 

const person = { name: "John", age: 30 };
const copiedPerson = { ...person };
console.log(copiedPerson); 

