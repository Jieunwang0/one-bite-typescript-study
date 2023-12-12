/**
 *  타입 좁히기 Type Narrowing
 * 조건문 등을 이용해 넓은 타입 -> 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기 할 것
 */

type Person = {
    name: string;
    age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
    // if와 typeof처럼 type narrowing 해주는 표현식을 Type Guard라고 함
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        console.log(value.getTime());
    } else if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
// if 
// typeof
// instanceof
// in