/**
 * 프로미스 Promise
 */

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});

promise.then((response) => {
    console.log(response * 20);
});
// 에러 매개변수는 타입을 좁혀서 사용할 수밖에 없음
// reject 시의 타입을 지정할 수가 없음
// 제네릭 클래스
promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                title: "제목",
                content: "게시내용",
            });
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id;
});
