/**
 * 제네릭
 */

// function func(value:unknown){
//     return value;
// }
function func<T>(value: T):T {
    return value;
}
// <T> = 타입변수. 함수를 호출할 때마다 인수에 따라 타입이 결정됨
// 범용적으로 쓸 수 있는 제네릭함수


let num = func(10);
// num.toUpperCase();

if(typeof num === 'number'){
    num.toFixed();
}
let bool = func(true);

let str = func('string');

// 프로그래머가 명시적으로 사용하는 법
1.
let arr1 = func([1,2,3] as [number, number, number]);
2.
let arr2 = func<[number, number, number]>([1, 2, 3]);
