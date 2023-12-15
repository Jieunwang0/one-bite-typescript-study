/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    // name: number; // 후속 속성 선언 시에는 같은 형식이 있어야함. 서브타입도 안된다
    name: string;
    age: number;
}
// 확장시에는 서브타입인 string literal type이어도 ok였지만 선언 합침의 경우에는 서브타입도 안된다
interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 25,
};


/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}
interface Lib {
    c: string;
}
const lib: Lib = {
    a: 1,
    b: 2,
    c: "xoxo",
    // c 를 추가하고 싶을 때, 선언 합침을 이용해서 타입을 추가할 수 있다.
};
