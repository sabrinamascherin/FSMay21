console.log('Hello world');

let i:number = 34;
let n:number = 23;

i = 10;
let z:number = i * n;

//Setting array of particular type with angle bracket
let arr:Array<number> = [23, 34, 10];

class Student{
    studentName:string; //property of the class

    constructor(name:string){
        this.studentName = name;
    }

    //methods
    getName():string{
        return this.studentName;
    }

    computeGPA():number{
        return 2.3;
    }
}

class UndergradStudent extends Student{
    getRegistrationNumber():string{
        return "ddfgfg";
    }
}

let obj1 = new Student("John Wick");
console.log(obj1.computeGPA());
console.log(obj1.getName());

let obj2 = new UndergradStudent("Jennifer Lopez");
console.log(obj2.computeGPA());
console.log(obj2.getName());
console.log(obj2.getRegistrationNumber());

//Interface
interface IStudent{
    id:number;
    name:string;
    age:number;
}

let students:IStudent[] = [ //Keep in mind IStudent[] is = to Array<IStudent>, as used before
    {id: 1, name: "Rose Benneth", age: 23},
    {id: 2, name: "Jane Benneth", age: 23},
    {id: 3, name: "Jennifer Benneth", age: 34},
];






