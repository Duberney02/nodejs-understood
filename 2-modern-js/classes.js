class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, level){
        super(name);
        this.level = level;
    }

    greet(){
        console.log(`Hello ${this.name} from ${this.level}`);
    }
}

const o1 = new Person("James");
const o2 = new Student("Jose", "2");
const o3 = new Student("Migue", "4");

o3.greet = () => console.log('I am special');

o1.greet();
o2.greet();
o3.greet();