const numbers = [1, 2, 3, 4, 5];
numbers.push(6); 
numbers.pop(); 
numbers.shift(); 
numbers.unshift(0);
console.log("Map:", numbers.map(function(n) { return n * n; }));
console.log("Filter:", numbers.filter(function(n) { return n % 2 === 0; }));
console.log("Reduce:", numbers.reduce(function(sum, n) { return sum + n; }, 0));
console.log("Find:", numbers.find(function(n) { return n % 2 === 0; }));
