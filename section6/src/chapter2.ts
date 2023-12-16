/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "왕지은",
    age: 24,
    position: "developer",
    work() {
        console.log("도비");
    },
};

// class
class Employee {
    //field
    name: string;
    age: number;
    position: string;

    //constructor
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // method
    work() {
        console.log("도비는 자유예요");
    }
}
const employeeB = new Employee("왕지은", 24, "개발자");
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
};

// 더 세분화된 클래스
class ExecutiveOfficer extends Employee {
    // field
    officeNumber: number;
    //constructor
    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
