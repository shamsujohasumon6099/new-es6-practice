class Parant{
    constructor(){
        this.fatherName = 'Mohammad Ali';
        this.motherName = 'Shamsunnahar';
    }
}


class Child extends Parant {
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +' '+ this.fatherName;
    }
}

const baby = new Child('Shamsujoha');
const baby2 = new Child('Sumon');
console.log(baby.getFullName());
console.log(baby2);