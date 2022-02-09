class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Ahammad Uddin'
    }
}
const student1 = new Student(12,'Shamsujoha');
const student2 = new Student(22, 'Sumon');
student1.trys = 'tack'
console.log(student1);
console.log(student2);