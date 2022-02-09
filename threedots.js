let num = [5,6,7,8,3];
let num2 = [10,30,40,50];
const result = Math.max(...num);


// const all = num.concat(num2);
const all = [...num , ...num2, 500];
console.log(all);