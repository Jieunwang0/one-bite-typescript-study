/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
}
type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;
// 서로소 유니온 타입으로 type을 수정하지 못하는 경우라고 치고 함수 전개

function isDog(animal:Animal): animal is Dog{
return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal:Animal)  {
    if(isDog(animal)){
        // animal에 커서 대보면 animal: Dog
        animal;
    }else if("isScratch" in animal){
        // animal에 커서 대보면 animal: Cat
        animal;
    }
}