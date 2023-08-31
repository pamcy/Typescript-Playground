/* ========================================
 Type aliases (Reusable Types)

 - 型別別名
 - 創建一個新的型別名稱，並且為它指定一個現有的型別
 - 優點：同樣的型別不需要重複寫 keeping your code DRY（Don't Repeat Yourself
======================================== */

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



/* ========================================
 Literal types

 - 字面量型別
 - 表示一個具體的值。這些值可以是字串、數字、布林值，甚至是特定的字面值。
 - 指定具體的值
 - You might have a variable where only "certain values" are expected
 - 優點：keeping your code DRY（Don't Repeat Yourself）
======================================== */

let seats: 'Window' | 'Aisle' | 'Middle'

seats = 'Aisle'

// seats = 'Custom'
// 這樣寫不 work，只能指派上面 3 個字面量值中的任一個


type Gender = 'Male' | 'Female'

const myGender: Gender = 'Female'

// const myGender2: Gender = 'Other'
// Type '"Other"' is not assignable to type 'Gender'.