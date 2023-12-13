/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// (어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기)
// => 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

// function func(a: number, b: number): number
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수를 정의하는 법
 */
//  (a: number, b: number): number는
//  (a: number, b: number)로 생략 가능
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
// 앞에 필수 매개변수가 먼저 오고 마지막에 선택적 매개변수(=?)가 와야함
function introduce(name = "왕지은", tall?: number) {
    console.log(`name: ${name}`);
    if (typeof tall === "number") {
        console.log(`tall: ${tall}+ 1`);
    }
}
introduce("왕지은", 158);
introduce("왕지은");
