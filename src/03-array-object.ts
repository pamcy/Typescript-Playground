/* =================================================================================
 Array
  - 教學
    - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
    - https://willh.gitbook.io/typescript-tutorial/basics/type-of-array

================================================================================= */

let stringArr = ['pamcy', 'adai', 'ami']
// string[]

let agents = ['hunt', 'bond', 700]
// (string | number)[]

let mixedData = ['captain', 1980, true]
// (string | number | boolean)[]

// stringArr[0] = 1982
// Type 'number' is not assignable to type 'string'.

stringArr[0] = 'chinyi'
stringArr.push('xiaodai')

agents[0] = 1972
agents.unshift('bourne')

// agents = mixedData
// Type '(string | number | boolean)[]' is not assignable to type '(string | number)[]'.

mixedData = agents


let emptyArr = []
// any[]
// could be any type in the array

let hero: string[] = []

hero.push('thor')
// hero.push(2)
// Argument of type 'number' is not assignable to parameter of type 'string'.

// * NOTE *
// 一般來說，array 不會限制長度或裡面的 type 順序
// 但，可以進一步強制，看以下 Tuple type



/*
 * Tuple type
 */

let veryStrictArr: [string, number, boolean] = ['frogs', 30, true]
// [string, number, boolean]

let normalArr = ['racoons', 32, false]
// (string | number | boolean)[]
// union type

// veryStrictArr[3] = 'bird'
// Type '"bird"' is not assignable to type 'undefined'.
// Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.

// veryStrictArr = normalArr
// Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
// Target requires 3 element(s) but source may have fewer.

normalArr = veryStrictArr




/* =================================================================================
 Object
 - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
   - https://willh.gitbook.io/typescript-tutorial/basics/type-of-object-interfaces

================================================================================= */

let myObj: object
myObj = []

console.log(typeof myObj)
// object
// array is also a obejct in javascript

myObj = mixedData
myObj = {}
// 以上這樣寫也都沒問題


const exampleObj = {
    prop1: 'pamcy',
    prop2: true
}
// {
//     prop1: string;
//     prop2: boolean;
// }

// exampleObj.prop1 = 42
// Type 'number' is not assignable to type 'string'.

exampleObj.prop2 = false


// 也可以用
// type Hero = {}
interface Hero {
    name: string,
    active: boolean,
    movie: (string | number)[]
}

// this is type Hero
let captain: Hero = {
    name: 'steve rogers',
    active: false,
    movie: ['winter soliders', 1980, 'avenger 3']
}

// let captain: Hero = {
//     name: 'steve rogers',
//     movie: ['winter soliders', 1980, 'avenger 3']
// }
// Property 'active' is missing in type '{ name: string; movie: (string | number)[]; }' but required in type 'Hero'.

// captain.year = 1988
// Property 'year' does not exist on type 'Hero'.


// 也可以用
// type Hero = {}
interface SuperHero {
    name?: string,  // name is optional, string | undefined (become union type)
    active: boolean,
    movie: (string | number)[]
}

let ironMan: SuperHero = {
    name: 'tony stark',
    active: true,
    movie: ['I', 'II', 1975]
}

// 沒有加上 'name' property 也沒關係
let thor: SuperHero = {
    active: false,
    movie: ['love & thunder', 1980]
}


const greetHero = (hero: SuperHero) => {
    // return `Hallo ${hero.name.toUpperCase()}`
    // error: 'hero.name' is possibly 'undefined'.

    // method 1
    // return `Hallo ${(hero?.name || '').toUpperCase()}`

    // method 2
    if (hero.name) {
        return `Hallo ${hero.name.toUpperCase()}`
    }

    return 'Hallo'
}

console.log(greetHero(ironMan));
// Hallo TONY STARK

console.log(greetHero(thor))
// Hallo


// NOTE
// 之後再討論 type vs. interface 的差別
// 通常會以 interface 為主
// ⭐ 見 04-function.ts




/* =================================================================================
 Enums (列舉)

 - 用於取值被限定在一定範圍內的場景，比如一週只能有七天，顏色限定為紅綠藍等。
 - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums
   - https://willh.gitbook.io/typescript-tutorial/advanced/enum

================================================================================= */

// 1. a special "class" that represents a group of constants (unchangeable variables).

// 2. unlike most typescript features, Enums are not a type-level addtion to javascript
//    but something added to the language and runtime.

// 3. by default,
//    enums will initialize the first value to 0 and add 1 to each additional value

enum Grade {
    U,
    D,
    C,
    B,
    A
}

console.log(Grade.U); // 0


// 4. you can set the value of the first numeric enum and have it auto increment from that
enum Grade2 {
    U = 1,
    D, // 2
    C, // 3
    B, // 4
    A  // 5
}

console.log(Grade2.U); // 1
