/* ======================================================================================
 Type Assertions (型別斷言)

 - 告訴 TypeScript compiler 某個變數的型別是我所聲稱的型別，並會忽略 compiler 推導的型別
 - 有的教學會用另一個名稱：Type Casting (型別轉換)

 - 教學
   - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
   - https://willh.gitbook.io/typescript-tutorial/basics/type-assertion

 - 用法
   - 值 as 型別
     - React 的 jsx 語法的 ts 版中，必須用這種
   - <型別>值
====================================================================================== */


/***** 基本概念 *****/

// convert to a more specific or less specific version of a type

type One = string
type Two = string | number
type Three = 'Hello' // a literal type

// 寫法1: 值 as 型別
// React 只能用這種方式
let demo1: One = 'Demo 1'
let demo2 = demo1 as Two // less specific
let demo3 = demo1 as Three // more specific

// 寫法2: 也可以用 <> 的寫法
// <型別>值
let demo4 = <Two>'Demo 4'

// 也可以不用寫成 alias，直接寫 union type
let demo5 = <string | number>'Demo 5'



/***** 實用案例 1 *****/

let addOrConcate = (a: number, b:number, c: 'add' | 'concate'): number | string => {
    if (c === 'add') {
        return a + b
    }

    return '' + a + b
}

console.log(addOrConcate(2, 3, 'add')); // 5
console.log(addOrConcate(2, 3, 'concate')); // 23 (as string)

// 如果我希望 result 會是一個 string type
// let result: string = addOrConcate(2, 3, 'concate')

// 滑鼠移到 'result', vscode 會顯示 error
// Type 'string | number' is not assignable to type 'string'.

// 加上 'as string'
// We are saying: hey ignore the warning we know we're returning the string
let result: string = addOrConcate(2, 3, 'concate') as string

// ❗❗ Be careful
// TS 沒發現問題，這個 'addOrConcate' 只會 return string，但它不會顯示錯誤
// With assertions, when you don't set them up correctly, because TS is completely believing us
let result2: number = addOrConcate(2, 3, 'concate') as number


// 一般來說，它還是盡可能會知道錯誤

// 10 as string
// Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.


// Unknown type
// - Force Casting or Double Casting
// - use 2 assertions
// - overrule (否決) the typescript
// - 沒必要情況下，不推薦使用
(10 as unknown) as string




/***** 實用案例 2: The DOM *****/

// 情境 1
// const imgEl = document.querySelector('img')
// const imgEl: HTMLImageElement | null

// imgEl.src
// Error: 'imgEl' is possibly 'null'

// 解決方式
// 加上 ! ('non-null' assertion)
const imgEl = document.querySelector('img')!
imgEl.src


// 💡 NOTE: non-null
// Put exclamation mark (!) at the end here
// We know it's not null, so just using an exclamation mark (!)



// 情境 2
// const imgClass = document.querySelector('.img')
// const imgClass: Element | null

// imgClass.src
// Error: 'imgClass' is possibly 'null'.

// 解決方式
// 加上 'as HTMLImageElement'
// vscode 會顯示一系列相關的 autocomplete
// 這樣 'as HTMLImageElement'，就能使用 'src' property
const imgClass = document.querySelector('.img') as HTMLImageElement
imgClass.src


// 情境 3
// const imgId = document.getElementById('#img')
// const imgId: HTMLElement | null

// imgId.src
// Error: 'imgId' is possibly 'null'

// const imgId = document.getElementById('#img')!
// imgId.src
// Error: Property 'src' does not exist on type 'HTMLElement'.

// 解決方式
// 加上 'as HTMLImageElement'
const imgId = document.getElementById('#img') as HTMLImageElement
imgId.src


