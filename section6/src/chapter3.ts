/**
 * 접근제어자
 */


// class
class Employee {
    //field
//    private name: string;
//    protected age: number;
//    public position: string;

    //constructor
    // 매개변수 앞에 달아주는 것도 가능한데 생성자에 접근자를 달면 필드도 자동으로 생성해주고(생략필수), 필드값 초기화도 자동으로 해주기 때문에 생략(생략선택)해야함
    constructor(private name: string, protected age: number,public position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // method
    work() {
        console.log("도비는 자유예요");
    }
}
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
    //method
    func() {
        // this.name;
        // 파생 클래스에서도 상위클래스에서 private으로 설정한 field의 값에 접근할 수 없다. Employee 클래스 내애서만 접근 가능
        this.age; // 외부에선 불가하지만 파생클래스에는 접근 가능하려면 protected로
    }
}

const employee =  new Employee('왕지은', 24, 'developer');
// employee.name='가나다'; // private 속성이면 해당 클래스 내에서만 접근가능
// employee.age=29; // protected 속성이면 외부에서 접근불가하지만 파생클래스에서까지는 접근이 가능
employee.position='designer'; // public

console.log(employee);