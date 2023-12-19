/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}
//<K,V> 같은 녀석들을 '타입 변수' = 타입 파라미터 = 제네릭 타입변수 = 제네릭 타입 파라미터 라고 사람마다 다르게 호칭

// 제네릭 인터페이스는 제네릭 함수와는 달리 타입으로 정의할 때 타입변수에 타입을 직접 할당해줘야 함 ####
let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -122,
    value: 12334325,
};

// 제네릭 인터페이스 + 인덱스 시그니처를 함께 사용하면 아주 유연하게 사용가능
interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringmap2: Map2<string> = {
    key: "hello",
};

/**
 * 제네릭 인터페이스의 활용예시
 * -> 유저 관리 프로그램
 * -> 유저구분: 학생유저/개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>){
    // if(user.profile.type !== 'student'){
    //     console.log('잘못오셨습니다');
    //     return;
    // }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`)
}

const developer: User<Developer> = {
    name: "왕지은",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const student: User <Student>= {
    name: "왕지은",
    profile: {
        type: "student",
        school: "단국대학교",
    },
};
