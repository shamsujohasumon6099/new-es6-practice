class Parant{
    constructor(){
        this.fatherName = 'Mahadul Islam';
        this.motherName = 'Ansaria Begum';
    }
}

class Child extends Parant {
    constructor(fName,lName,age,cHome){
        super();
        
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.currentHome = cHome;
        this.fullName = this.getFullName()
        

    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}


const megh = new Child('Zannatul','Mubashira',24,'Dhaka');
const mitu = new Child('Muftahul','Jannat',30,'Dhaka');
const pranto = new Child('Az','Pranto',16,'Gaibandha');
console.log(megh);
console.log(mitu);
console.log(pranto);