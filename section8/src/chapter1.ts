/**
 * 인덱스드 액세스 타입 indexed excess type
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

// function printAuthorInfo(author:{id:number, name: string}) {
//     console.log(`${author.name}-${author.id}`)
// }


// 요기 ['author'] 부분은 값이 아니라 타입을 뜻하는 것
function printAuthorInfo(author: Post['author']) {
    console.log(`${author.name}-${author.id}`);
}

// 만약 author의 id만 가져오고 싶으면
// function printAuthorInfo(author: Post['author']['id']) {
//     console.log(`${author.id}`);
// }

const post: Post = {
    title: '제목',
    content: '게시글',
    author: {
        id: 1,
        name: '왕지은',
        age: 24,
    },
}

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo2(author: Post["author"]) {
    console.log(`${author.name}-${author.id}`);
}


// 여기 [0] 도 0값이 아니라 number literal type을 뜻함
const post2: PostList[0] = {
    title: "제목",
    content: "게시글",
    author: {
        id: 1,
        name: "왕지은",
        age: 24,
    },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // index에 3번째 값이 없음
type TupNum = Tup[number];


