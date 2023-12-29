/* 조건부 타입 기반의 유틸리티 타입 - Exclude, Extract, ReturnType */

/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */
type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 3단계
// never는 사라지니까 결과는 string만 남음
// type A = string

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;
// 1단계
// Extract<string, boolean> |
// Extract<boolean, boolean>

// 2단계
// never
// boolean

// 3단계
// never는 사라지니까 결과는 boolean만 남음
// type B = boolean;

type B = Extract<string | boolean, boolean>;

/**
 * ReturnType
 * -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R
    ? R
    : never;
// funcA의 경우 T에 () => string
// infer R를 해석하자면 T 타입이 sub타입이 되도록하는 R을 추론하라는 건데 
// funcA의 경우 R은 string 타입이 되고 funcB의 경우엔 R은 number 타입이 된다

function funcA() {
    return "hello";
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
