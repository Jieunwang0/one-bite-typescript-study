/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 갯수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입은 number
 * -> ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 -> 오버로드 시그니처
function func(a: number): void; // 1번
function func(a: number, b: number, c: number): void; // 2번
// 실제 구현부 -> 구현 시그니처
// function func(a: number);
// function func(a: number, b: number, c: number) 는 1번 오버로드 시그니처를 만든 의미가 없어지기 때문에 ?로 있을수도 없을수도 있는 매개변수의 값을 표현해줘야한다
function func(a: number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}
// func();
func(1);
// func(1,2);
func(1, 2, 3);
