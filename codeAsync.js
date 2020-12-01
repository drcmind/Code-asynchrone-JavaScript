//Le code asynchrone : [non-blocking-code]
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('Hey! Code asynchrone');
}, 2000);

console.log(3);
console.log(4);