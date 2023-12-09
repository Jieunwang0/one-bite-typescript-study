/**
 *  Unknown
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hell";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * never
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }
    let voidVar: void = undefined;
}

/**
 * any
 */
function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let neverVar: never;

    anyVar = unknownVar;
    unknownVar = anyVar;
    // neverVar = anyVar;
}