/*
 *  Array
 */

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


// Tuple type

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
