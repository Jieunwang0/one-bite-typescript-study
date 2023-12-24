/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
// extends 양 옆에 []를 씌워주면 조건부 타입이 분산적으로 작동하지 않게 할 수 있다
// ex) [ㅁㅁ] extends [ㄹㄹ]


let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;
// 유니온 타입을 할당하면 한번은 넘버, 한번은 스트링으로 분산되어 들어감
// StringNumberSwitch<number> -> string
// StringNumberSwitch<string> -> number
// 이 두개의 타입이 유니온으로 묶이는 것
// 결론적으로 결과는 let c: string | number 가 된다

let d: StringNumberSwitch<boolean | number | string>;
// Step 1)
// StringNumberSwitch<boolean> -> number
// StringNumberSwitch<number> -> string
// StringNumberSwitch<string> -> number

// Step 2)
// number | string | number 가 되어

// Final)
// let d: number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// Step 1) 경우의 수
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// Step 2)
// number
// never
// boolean

// Final)
// number | never | boolean
// 유니언 타입에 never가 포합되어 있으면 never는 사라짐
// 최종 결과는 type A = number | boolean 이 된다

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;

// Step 1) 경우의 수
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// Step 2)
// never
// string
// never

// Final)
// type B = string
