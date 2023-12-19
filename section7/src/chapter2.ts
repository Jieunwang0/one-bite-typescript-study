/**
 * 타입 변수 응용하기
 */

import { get } from "http";

/** 
 * 첫번째 사례: 여러개의 매개변수가 타입이 다를 때 *
 */

// function swap<T>(a: T, b: T) {
//     return [b, a];
// }
// const [a, b] = swap("1", 2);
// a가 string 이라 b까지 string으로 추론해버려서 오류.
function swap<T, U>(a: T, b: U) {
    return [b, a];
}
const [a, b] = swap("1", 2);



/** 
 * 두번째 사례: 스프레드 문법을 이용해서 조건 제한하기
 */


// function returnFirstValue<T>(data:T[]) {
//     return data[0];
// } data[0]번째 요소의 타입만 알면 되니까 첫번째 요소만 T로 알아보고 나머지는 몇개던지 타입이 뭔지 알 필요가 없으므로 밑의 문법으로 사용 가능
function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hello", "mynameis"]);
//'hello'


/**
 *  세번째 사례: 타입 변수에 조건을 달아 제한하기 
 */

function getLength<T extends {length: number}>(data:T) {
    return data.length;
}

let var1 = getLength([1,2,3]);
let var2 = getLength("12345");
let var3 = getLength({length: 10});
// let var4 = getLength(10);
