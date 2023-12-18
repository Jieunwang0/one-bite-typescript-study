/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    // name: string;
    // moveSpeed: number;
    // 인터페이스로 정의하는 필드는 무조건 public
    // protected나 private을 정의하려면 밑의 constructor에 따로 정의해야함

    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string
    ) // 이것처럼 constructor에 정의

    {
        // this.name = name;
        // this.moveSpeed = moveSpeed;
    }
    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
