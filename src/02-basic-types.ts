/* =================================================================================
 Basic types

 - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
   - https://willh.gitbook.io/typescript-tutorial/basics/primitive-data-types
================================================================================= */

let myName: string = 'Pamcy'
let luckyNumer: number = 8
let isLoading: boolean = false

myName = 'Adai'
luckyNumer = 6
isLoading = true


// could be any data type
let album: any

album = 1982
album = 'Gone with the wind'
album = false


// union type ('|' means or)
let mood: string | number | boolean
let postId: string | number
let isActive: boolean | number

mood = 'happy'
mood = 5
mood = true


// function parameters
const sum = (a: number, b: string) => {
    return a + b
}


// regular expression type
let regularExp: RegExp = /\w+/g

// 即使不用特別寫，typescript 也會自動認列是屬於 RegExp type
let regularExp2 = /\w+/g