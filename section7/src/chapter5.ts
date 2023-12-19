/**
 * 제네릭 클래스
 */

// class NumberList {
//     constructor(private list: number[]){}

//     push(data: number){
//         this.list.push(data);
//     }

//     pop(){
//         return this.list.pop();
//     }
//     print() {
//         console.log(this.list);
//     }
// }

// const numberList = new NumberList([1,2,3])
// numberList.pop()
// numberList.push(4);
// numberList.print();

class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}

const stringList = new List(['1','3']);
stringList.pop();
stringList.push("hry");
stringList.print();

// 제네릭 클래스는 제네릭 인터페이스랑 제네릭 타입변수와는 다르게 
// 클래스 생성자 인수로 전달하는 값을 기준으로 타입을 추론