const person = {
    name : 'Jack William',
    age: 17,
    job:'facebook',
    gfName: 'Ema Watson',
    address: 'kochu khet',
    phone: '01797363591',
    friends: ['Rupom','Muid','Mimshad']
}

const {phone, gfName,address, friends} = person;
// var result = person.gfName;
console.log(`${gfName} - ${phone} - ${address} - ${friends}`);
const friend =['Rupom','Muid','Mimshad','mishkat'];
const [chotoFriend, nextFriend, ...restFriends] = friends;

console.log(chotoFriend,nextFriend);
console.log(restFriends);
