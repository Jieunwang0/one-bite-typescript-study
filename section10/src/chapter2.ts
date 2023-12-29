/* 맵드 타입 기반의  유틸리티 타입 2 - Pick, Omit, Record  */

/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱! 골라내기
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

// type Pick<T, K> = {
//     [key in K]: T[key];
// }

// Problem : Duplicate identifier 'Pick'
// Problem : Type 'K' is not assignable to type 'string | number | symbol'
// Problem : Type 'key' cannot be used to index type 'T',

// [A in B] in 우측에는 key가 뭐가 있는지 표현해주기 위해서 스트링 리터럴로 만든 유니온 타입이 들어올 수 있음
// 근데 이 타입변수 K에 제약이 없는 상태라 함수, 객체, never까지 다 들어올 수 있기 떄문에 제한해줘야함.
// Pick<T, K>에서 K를 <T, K extends keyof T>
// 타입 변수 K에 할당할 수 있는 타입은 무조건 T로 들어오는 객체key 값들을 추출한 유니온 타입의 서브타입만 들어올 수 있게 됌

type Pick<T, K extends keyof T> = {
    [key in K]: T[key];
};
// K extends 'title' | 'content' | 'thumbnailURL'
// 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
// 좌가 우의 서브타입이 되기때문에 이 조건식이 참이 된다

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 제목",
    content: "옛날 글",
};
// const legacyPost: Pick<Post, number> = {
//     title: "옛날 제목",
//     content: "옛날 글",
// };
// number 같이 뚱딴지같은 타입을 넣을 수 없도록 제한해줌




/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// const noTitlePost: Pick<Post, "content" | "tags" | "thumbnailURL"> = {
//     content: "",
//     tags: [],
//     thumbnailURL: "",
// };
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Exclude<A, B>는 앞에 전달한 타입변수에서 뒤에 전달한 타입변수를 제거한 타입을 반환하는 타입
// 결과 : Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};





/**
 * Record<K, V>
 * -> 동일한 패턴을 갖는 객체 타입을 정의할 때 사용
 */

type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
    watch: {
        url: string;
    };
};

type Record<K extends keyof any, V> = {
    [key in K]: V;
}
// 타입 변수 K에 들어오는 타입은 어떤 객체 타입의 키를 추출해놓은 유니언 타입임을 명시
// in 연산자 우측에 들어갈 수 있도록 제약을 걸어주는 것

type Thumbnail = Record<
    "large" | "medium" | "small" | "watch",
    { url: string; size: number;}
>;

// type ThumbnailLegacy 랑 type Thumbnail이랑 지금 똑같은 내용임 
// ++ Thumbnail에 size 추가함

