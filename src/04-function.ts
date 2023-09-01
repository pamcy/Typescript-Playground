/* =================================================================================
 Type aliases (型別別名)

 - Reusable Types
   - 創建一個新的型別名稱，並且為它指定一個現有的型別
   - 優點：同樣的型別不需要重複寫 keeping your code DRY（Don't Repeat Yourself

 - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
   - https://willh.gitbook.io/typescript-tutorial/advanced/type-aliases

================================================================================= */

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type SuperbHero = {
    name?: string,  // name is optional, string | undefined (become union type)
    active: boolean,
    movie: stringOrNumberArray // use type alias inside another type alias
}

type UserId = stringOrNumber


/*
 * Note: Difference between Type vs. Interface

 ⭐ Interface: more like as 'objects' or 'classes'
 ⭐ Alias: as an alias for any type of typescript type that we might assign

```
interface UserId = stringOrNumber
```

- 不能這樣寫
- try to set 'UserId' equal to 'stringOrNumber' and that just won't work

*/



/* =================================================================================
 Literal types

 - 字面量型別
 - 表示一個具體的值。這些值可以是字串、數字、布林值，甚至是特定的字面值。
 - 指定具體的值
 - You might have a variable where only "certain values" are expected
 - 優點：keeping your code DRY（Don't Repeat Yourself）
 - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
   - https://willh.gitbook.io/typescript-tutorial/advanced/string-literal-types
================================================================================= */

let seats: 'Window' | 'Aisle' | 'Middle'

seats = 'Aisle'

// seats = 'Custom'
// 這樣寫不 work，只能指派上面 3 個字面量值中的任一個


type Gender = 'Male' | 'Female'

const myGender: Gender = 'Female'

// const myGender2: Gender = 'Other'
// Type '"Other"' is not assignable to type 'Gender'.




/* =================================================================================
 Function

  - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions
   - https://willh.gitbook.io/typescript-tutorial/basics/type-of-function

================================================================================= */

const addNumbers = (a: number, b: number) => {
    return a + b;
}
// 滑鼠移到 'addNumbers', vscode 會顯示
// const addNumbers: (a: number, b: number) => number
// => number (代表 the function will return a number)


/*
 * () 之後加上 :
 * Type of the data that the function will return
 */
const addTotalNumbers = (a: number, b: number): number => {
    return a + b;
}

const logMessage = (msg: any) => {
    console.log(msg);
}
// 滑鼠移到 'logMessage', vscode 會顯示
// const logMessage: (msg: any) => void


/*
 * ⭐ Void type
 * A void type of return data
 * Function that do not return anything
 */


const logMessageOnly = (msg: any): void => {
    console.log(msg);
}

logMessageOnly('Hallo Welt!') // Hallo Welt!
logMessageOnly(addTotalNumbers(3, 2)) // 5

// logMessageOnly(addTotalNumbers(1, 'Go!'))
// Argument of type 'string' is not assignable to parameter of type 'number'.


// 以下範例改使用 regular function 取代 arrow function

// PS. 不建議使用： function subtractNumbers () {}
// 要套用 function type alias 會變得很多餘、麻煩

const subtractNumbers = function (a: number, b: number) {
    return a - b;
}


/*
 * 如果同樣的參數 type 都一樣
 * 也可以使用 type alias for function
 */


type mathFunction = (a: number, b: number) => number

// 也可以用 Interface，結果都是一樣
// interface mathFunction {
//     (a: number, b: number): number
// }


const multiplyNumbers: mathFunction = function (c, d) {
    return c * d;
}

logMessageOnly(multiplyNumbers(2, 3))


// Type vs. Interface 通常使用情境
// - Interfaces: I'm thinking more about 'classes' and being able to extend those
// - Type alias: Functions and other basic types



/*
 * Optional parameters & default values
 */

// Optional parameters

// 加上 ？ ： it's optional value
const addAll = (a: number, b: number, c?: number): number => {
    // 如果只有寫這樣
    // return a + b + c;
    // error: 'c' is possibly 'undefined'

    if (c !== undefined) {
        return a + b + c
    }

    // 如果不加上這行，會出現 error
    // Function lacks ending return statement and return type does not include 'undefined'.

    return a + b
}

logMessage(addAll(1, 2)) // 3
logMessage(addAll(1, 2, 3)) // 6


// Default values

const sumAll = (a: number, b: number, c: number = 1): number => {
    return a + b + c;
}

logMessage(sumAll(1, 2)) // 4
logMessage(sumAll(1, 2, 3)) // 6


// 如果第一個是 optional value， argument 一定要傳入 undefined
const sumAll_2 = (a: number = 7, b: number, c: number = 1): number => {
    return a + b + c;
}

logMessage(sumAll_2(undefined, 3)) // 11
logMessage(sumAll_2(5, 3, 2)) // 10


// !! NOTE !!
// Default values 無法使用 function type alias
// ex. type mathFunction = (a: number, b: number) => number



/*
 * Rest parameters
 */


// we don't know how many numbers
// A rest parameter must be of an 'array' type

const countTotal = (...nums: number[]): number => {
    return nums.reduce((prev, current) => prev + current, 0);
}

logMessage(countTotal(1, 2, 3, 4, 5)) // 15


// rest operators 要放在最後面，required parameters 放在最前面
const countTotal_2 = (num1: number, ...nums: number[]): number => {
    return num1 + nums.reduce((prev, current) => prev + current, 0);
}

logMessage(countTotal_2(10, 1, 2, 3, 4, 5)) // 25



/*
 * Never type
 * 不常看到，但在某些時刻可能會需要
 *
 * 永遠不會發生的值
 * 永遠不會結束或返回的運算，例如拋出異常或進入無限迴圈
 */


const creatError = (errMsg: string) => {
    throw new Error(errMsg)
}
// 滑鼠移到 'creatErro', vscode 會顯示
// const creatError: (errMsg: any) => never
// The function will return a 'never' type


const infiniteLoop = () => {
    let i: number = 1;

    while(true) {
        i++
    }
}
// 滑鼠移到 'infiniteLoop', vscode 會顯示
// const infiniteLoop: () => never
// ps. Demo 用，千萬不要呼叫


const infiniteLoop2 = () => {
    let i: number = 1;

    while(true) {
        i++

        // 加上這行就能終止無線迴圈，return void (nothing)
        if (i > 10) {
            break;
        }
    }
}
// 滑鼠移到 'infiniteLoop2', vscode 會顯示
// const infiniteLoop2: () => void


// Never type 的實際運用
const handleNumberOrString = (value: number | string): string => {
    // Type guards to check the value
    if (typeof value === 'string') {
        return 'String';
    }

    if (typeof value === 'number') {
        return 'Number'
    }

    // 沒有加上這行話，vscode 會顯示 error
    // Function lacks ending return statement and return type does not include 'undefined'.
    // return a never type
    return creatError('This should never happen!')
}


// Custom type guards
// 如果很常需要檢查 type，通常會另外寫 type guards
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false;
}

const handleNumberOrString2 = (value: number | string): string => {
    // Type guards to check the value
    if (typeof value === 'string') {
        return 'String';
    }

    if (isNumber(value)) {
        return 'Number'
    }

    return creatError('This should never happen!')
}