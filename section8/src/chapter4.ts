/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

// 가능한 경우의 수가 모두 조합된 타입으로 만들어짐
type ColorAnimal = `${Color}-${Animal}`
