/**
 *  타입 추론 Type Inference
 */

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "왕지은",
    profile: {
        nickname: "jieunw",
        introduce: "nice to meet you",
    },
    urls: ["https://velog.io/@jieunwang"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 함수의 반환값 타입을 추론할 때는 초기화하는 값이 아니라 return문 다음의 반환값을 기준으로 추론함
function func(message = "hello") {
    return "hello";
}

let d; // 암묵적 any 추론. 명시적으로 let d:any 로 정의할 때는 진화 같은 것 없이 계속 any타입인데, 암묵적 any면 타입 진화함
d = 10; // <- any 에서 number로
d.toFixed(1);
d = "hi"; // string으로
d.toUpperCase();
// Evolution of any type. 초기값을 지정하지 않으면 암묵저긍로 진화할 수 있다. 하지만 좋지 않은 방법.. 나중에 알아맞춰야하는 상황이 올 수도 있으니 사용하는 걸 추천하지 않음

const num = 10;
const differenceOfConst = "AAAAA"; // const differenceOfConst: "AAAAA"
let differenceOfLet = "BB"; //let differenceOfLet: string
let any = [1, "string"]; // let any: (string | number)[]

// 타입스크립트는 웬만한 변수는 모두 타입 추론해줌 
// = > const로 선언된 변수가 아니면 타입 넓히기를 통해 타입을 추론해준다