/**
 *  대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재함
 */

/**
 *  1. 합집합 Union Type
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1:Union1 = {
    name: "",
    color: "",
}

let union2:Union1 = {
    name: "",
    language: "",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
};

// Dog의 집합도, Person의 집합도 아니니 union4는 불가
// let union4: Union1 = {
//     name: ""
// }


/**
 *  2. 교집합 Intersection Type
 */

let veriable: number & string;

type Dog2 = {
    name: string;
    color: string;
};

type Person2 = {
    name: string;
    language: string;
};

type Intersection = Dog2 & Person2;

// A & B 의 타입일 경우 A와 B의 내용물이 하나라도 없으면 안된다 모두 들어가있어야함 교집합 ! 
let intersection: Intersection = {
    name: "",
    color: "",
    language:  "",
}