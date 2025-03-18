let age: number = 30; // Под тип данных number входят значения: числа до 2 в 53 степени (а также NaN)
// age = "50";  - Ошибка типизации

let age1: number | string = 30; // | - значение или
age1 = "50";

// let x = 50; // Пример неявной типизации
// х = "50";  - Ошибка типизации (при неявной типизации был определен тип number)

let flag: boolean = false;
flag = true;

// number, string, boolean, null, undefined       bigint(8888888n), symbol(str)

const arr: number[] = [1, 2, 3, 4];

// arr.push('5'); //Ошибка типизации

const arr1: number[] | string[] = [1, 2, 3]; // здесь массив или чисел или строк, можно писать лишь один вариант
const arr2: (number | string)[] = [1, '2', 3, '4']; // здесь массив, который может состоять и из чисел и из строк

console.log("Hello for Terminal!");
