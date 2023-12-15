/**
 * 인터페이스 interface
 */

interface Person {
    readonly name: string;
    age?: number;
    // sayHi: () => void;  // 함수 타입 표현식
    sayHi(): void; // 호출 시그니처
    sayHi(a: number, b: number): void; // 호출 시그니처
}

const person: Person = {
    name: "왕지은",
    sayHi: function () {
        console.log("hi");
    },
};

person.sayHi();
person.sayHi(1,2);

