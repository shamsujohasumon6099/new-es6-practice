// function doubleIt(num) {
//     return num*2;
// }

// const doubleIt = function (num) {
//     return num * 10;
// }

const doubleIt = num => num*2;
const add = (x,y) => x+y;
const result2 = ()=>50;

const doMath = (x,y) =>{
    const sum = x+y;
    const diff = x - y ;
    const result = sum * diff;
    return result;
}

console.log(doubleIt(15));
console.log(add(50,40));
console.log(result2());

console.log(doMath(20,10));