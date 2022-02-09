const firstName = 'Justin';
const lastName = 'TimberLake';
const fullName = firstName + ' ' + lastName + 'is a good boy';
function add(num1,num2) {
    return num1+num2;
}

const fullName2 = `${firstName} ${lastName} ${add(100,45)} is a good boy`;

console.log(fullName);
console.log(fullName2);