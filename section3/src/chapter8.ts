/**
 *  서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

// tag의 타입을 string literal type으로 만들어줌으로서 교집합이 절대 되지 않는 관계가 되므로 Admin, Member, Guest가 서로소 관계가 된다
type User = Admin | Member | Guest;

// Admin => {name}님, 현재까지 {kickCount}명 깅퇴하였습니다.
// Member => {name}님, 현재까지 {point} 모았습니다.
// Guest => {name}님, 현재까지 {visitCount}번 오셨습니다.

// ******* 방법 1 ********
// function login(user: User) {
//     if ("kickCount" in user) {
//         console.log(
//             `${user.name}님, 현재까지 ${user.kickCount}명 깅퇴하였습니다.`
//         );
//     } else if ("point" in user) {
//         console.log(`${user.name}님, 현재까지 ${user.point} 모았습니다.`);
//     } else {
//         console.log(
//             `${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`
//         );
//     }
// }

// ******* 방법 2 ********
// function login(user: User) {
//     if (user.tag === "ADMIN") {
//         console.log(
//             `${user.name}님, 현재까지 ${user.kickCount}명 깅퇴하였습니다.`
//         );
//     } else if (user.tag === "MEMBER") {
//         console.log(`${user.name}님, 현재까지 ${user.point} 모았습니다.`);
//     } else  {
//         console.log(
//             `${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`
//         );
//     }
// }

// ******* 방법 3 ********
function login(user: User) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(
                `${user.name}님, 현재까지 ${user.kickCount}명 깅퇴하였습니다.`
            );
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님, 현재까지 ${user.point} 모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(
                `${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`
            );
        }
    }
}

/**
 *  복습 겸 하나 더
 */

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state: "LOADING";
};
type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};
type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: "success:";
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// loading -> console.log(loading..)
// failed -> console.log(error: )
// success -> console.log(success : )
function processResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("loading...");
            break;
        }
        case "FAILED": {
            console.log(`error message: ${task.error.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`success: ${task.response.data}`);
            break;
        }
    }
}
const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "error:",
    },
};
const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "success:",
    },
};
