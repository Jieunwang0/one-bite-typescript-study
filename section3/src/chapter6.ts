/**
 *  타입 단언 Type Assertion
 */
// 타입스크립트의 눈을 잠깐 가려서 내가 작성한 타입이라고 믿도록 만드는 것이기 때문에 위험할 수 있다..

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "왕지은";
person.age = 24;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "바둑이",
    color: "white",
    breed: "jindo",
} as Dog;

/**
 *  타입 단언의 규칙
 * 단언식 : """   값 as 단언   """"
 * A as B
 * -> A가 B의 슈퍼 타입이거나
 * -> A가 B의 서브 타입이어야 함.
 *
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;


/**
 *  const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// cat.name = "";
//  --> cannot assign to 'name' because it is a readonly property.
// const 선언으로 readonly 프로퍼티를 만들 수 있음

/**
 *  Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글",
    author: "왕지은",
}

// const len:number = post.author?.length;
// --> ?로 인해 optional chaining이 일어나는데, type 'number | undefined' 일 경우 number 전용 메소드 length를 undefined일 수도 있는 변수에 사용할 수 없다는 의미
// ! 로 확언을 줘야한다. !사용시 이건 null이나 undefined가 절대 아니고 값이 있다는 단언을 하는 것
const len: number = post.author!.length;
