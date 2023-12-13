/**
 * 함수 타입 표현식 Function Type Expresstion
 */

type Operation = (a: number, b: number) => number;

// const add:Operation = (a, b) => a + b; 밑의 add랑 같은 내용
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 Call Signiture
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string;
    // -> 객체로도 쓰고 함수로도 쓸 수 있는 hybrid type
    // -> 함수도 객체이기 떄문에 가능
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// add2();
// add2.name;