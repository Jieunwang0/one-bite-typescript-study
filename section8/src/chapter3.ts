/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}
type PartialUser = {
   [key in 'id'|'name'|'age']?: User[key];
   // [key] : [value]
   // {'id' : User['id'], 'name':User['name'], 'age':User['age']}
}
/** type PartialUser = {
    id: number;
    name: string;
    age: number;
} */ 

type BooleanUser = {
    [key in keyof User]: boolean;
}; // User의 모든 키들이 boolean 타입이도록

type readonlyUser = {
    readonly [key in keyof User]: User[key];
}; // 모두 읽기전용으로 만들기

// 한명의 유저 정보를 불러오는 기능 fetchUser();
function fetchUser(): User {
    return {
        id: 1,
        name: "왕지은",
        age: 24,
    };
}

const user = fetchUser();
user.id =1;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
// ...
}

updateUser({age: 26});