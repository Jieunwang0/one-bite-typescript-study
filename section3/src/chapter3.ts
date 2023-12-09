import { type } from "os";

// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// num2 = num1;

// 객체 타입간의 호환성
// -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮을까?!

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "giraffe",
    color: "yellow",
};

let dog: Dog = {
    name: "syrious",
    color: "black",
    breed: "gray hound",
};

animal = dog;
// dog = animal;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};
let book: Book = {
    name: "sciencebook",
    price: 28000,
};

let programmingBook: ProgrammingBook = {
    name: "dynosour book",
    price: 52000,
    skill: "algorism",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티검사
type Book = {
    name: string;
    price: number;
};

let book2: Book = {
    name: "dynosour book",
    price: 52000,
    // skill: "algorism",
};

let book3: Book = programmingBook;

function func(book: Book) {}
    func({ name: "dynosour book", 
    price: 52000, 
    // skill: "algorism" 
});
    func(programmingBook);

