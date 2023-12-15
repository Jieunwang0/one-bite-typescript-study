/**
 * 클래스 class
 */

let studentA = {
    name: "왕지은",
    grade: "A+",
    age: 24,
    study() {
        console.log("열심히 공부함");
    },
    introduce() {
        console.log("안녕하세요");
    },
};

class Student {
    // field
    name;
    grade;
    age;
    // constructor
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
    // method
    study() {
        console.log("열심히 공부함");
    }

    introduce() {
        console.log("안녕하세요");
    }
}

class StudentDeveloper extends Student {
    // field
    favoriteSkill;

    // constructor
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        // Student의 field가 그대로 가져오게 되는데 여기서는 밑의 favoriteSkill만 생성자 함수 안에 존재하기 때문에 여기서 super()로 인수를 전달해야 인스턴스가 생성됨 
        this.favoriteSkill = favoriteSkill;
    }
    // method

    programming() {
        console.log(`${this.favoriteSkill}로 개발함`);
    }
}
let studentDeveloper = new StudentDeveloper(
    "테스트네임",
    "테스트그레이드",
    "테스트에이지",
    "테스트스킬"
);
console.log(studentDeveloper);
studentDeveloper.programming();
// 클래스를 이용해서 만든 객체 => 인스턴스
// 이거는 student라는 클래스를 이용해서 만든 인스턴스라서 student instance 라고 부르면 된다
let studentB = new Student("가나다", "B+", 26);
console.log(studentB);
