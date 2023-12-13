/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괘낯ㄴㅎ은가를 판단하는
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

// 1. 반환값의 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;
// - B <= A
// - number literal type <= number type
// - 반환값 기준이면 다운캐스팅 X, 업 캐스팅만 가능

// 2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 갯수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
// - C <= D
// - number type <= number literal type
// - 매개변수 기준이면 업 캐스팅 X
d = c;

/* ++ 객체로 예시 */
type Animal = {
    name: string;
};
type Dog = {
    name: string;
    color: string;
};
let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// animalFunc = dogFunc;
// - Animal <= Dog
// - Dog타입은 Animal타입의 서브 타입이 때문에 Animal이 가진 타입을 다 가지고 있음.
// - 그렇지만 Animal은 Dog타입이 가진 타입을 다 가지고 있지 않기 때문에 안된다
// - 매개변수 기준일 경우에는 다운 캐스팅만 가능하다.
dogFunc = animalFunc;

// 2-2. 매개변수의 갯수가 다를 때
// - 타입 같은 게 있어야 가능
// - type Func1 = (a: string, b: number) => void; 이러면 못함

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
// - Func2 <= Func1
// - Func2의 매개변수의 갯수는 1개, Func1은 2개인데
// - 1개 <= 2개 하려니 호환이 안되는 것
