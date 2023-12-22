/**
 * keyof 연산자
 */


// 방법 1 - keyof
interface Person{
    name: string;
    age: number;
}

// keyof [타입] 하면 Person 객체 타입의 프로퍼티의 키들의 유니온타입을 추출
// 여기서는 key: keyof Person 하면
// 'name' string literal | 'age' string literal 이 나온다
function getPropertyKey (person: Person, key: keyof Person) {
    return person[key];
}

const person:Person = {
    name:'왕지은',
    age: 24,
}

getPropertyKey(person, 'name');


// 방법2 - keyof typeof
// key: keyof typeof person2 
// typeof로 person2의 타입 name: string, age: number를 추론해서 
// keyof로 추론한 타입 프로퍼티의 키들의 유니온 타입을 추출하는 방식으로 코드를 작성할 수 있다
type Person2 = typeof person2;

function getPropertyKey2(person: Person2, key: keyof typeof person2) {
    return person[key];
}

const person2 = {
    name: "왕지은",
    age: 24,
};

getPropertyKey2(person2, "name");

