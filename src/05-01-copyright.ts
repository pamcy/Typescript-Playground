/***** Original JS code *****/

/*

const year = document.getElementById('year')
// const year: HTMLElement | null

const thisYear = new Date().getFullYear()
// const thisYear: () => number

year.setAttribute('datetime', thisYear)
// Error: 'year' is possibly 'null'
// Error: Argument of type '() => number' is not assignable to parameter of type 'string'

year.textContent = thisYear
// Error: 'year' is possibly 'null'
// Type '() => number' is not assignable to type 'string'

*/


// 我的解法

/*
const year = document.getElementById('year')!
const thisYear = new Date().getFullYear().toString()

year.setAttribute('datetime', thisYear)
year.textContent = thisYear
*/


// Dave 的解法

const year = document.getElementById('year') as HTMLSpanElement
// const year: HTMLSpanElement
// 明確的定義，就不會有 union type (HTMLElement | null) 可能是 null 的問題

const thisYear: string = new Date().getFullYear().toString()

year.setAttribute('datetime', thisYear)
year.textContent = thisYear