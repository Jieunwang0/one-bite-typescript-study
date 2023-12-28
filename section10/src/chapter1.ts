/**맵드 타입 기반의  유틸리티 타입 1 -  Partial, Required, Readonly */

/**
 * Partial<T>
 * -> 부분적인, 일부의
 * -> 특정객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};
// A in B 면 A키 가 B 유니온타입에 하나씩 맵핑이 됌
// 이렇게 모든 프로퍼티가 선택적 프로퍼티가 되었다
const draft: Partial<Post> = {
    title: "제목",
    content: "초안",
};

/**
 * Required<T>
 * -> 필수의 , 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
    [key in keyof T]-?: T[key];
};
// -? 물음표를 빼겠다는 의미
const withThumbnailPost: Required<Post> = {
    title: "제목",
    tags: ["ts"],
    content: "",
    thumbnailURL: "http://..",
};


/**
 * Readonly<T>
 * -> 읽기전용, 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readonlyPost:Readonly<Post> ={
    title: '보호된 게시글입니다',
    tags: [],
    content: "",
}

// readonlyPost.content = "";
// cannot assign to 'content' because it is a read-only propery.
// readonly 프로퍼티라서 접근불가