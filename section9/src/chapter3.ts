/**
 * infer
 * inference = 추론하다
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; // string
type B = ReturnType<FuncB>; // number
type C = ReturnType<number>; // never


/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1, T는 프로미스 타입이어야 함
// 2. 프로미스 타입의 결과값 타입을 반환함

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string

// 조건부 타입 내에서 타입 추론이 가능해짐.