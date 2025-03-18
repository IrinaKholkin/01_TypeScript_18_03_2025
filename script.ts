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

// HW 18.03.2025
// / Переменные разных типов
// let productName = "Laptop"; // Название товара

let productName: string = "Laptop";

// let price = 1499.99; // Цена товара

let price: number = 1499.99;
// price = "Expensive";

// let inStock = true; // Есть ли товар в наличии

let inStock: boolean = true;
// inStock = "yes";

// let discount = null; // Скидка пока не установлена

let discount: null = null;

// let warranty; // Переменная без значения (undefined)

let warranty: undefined;

// Переменная, которая может быть числом или строкой
// let productCode = 1010;
// productCode = "A1010";

let productCode: (number | string) = 1010;
// productCode = "A1010";  

// Массив чисел (цены товаров)
// const prices = [499, 1299, 799, 2499, 1599];

const prices: number[] = [499, 1299, 799, 2499, 1599];

// prices.push("2000"); // Ошибка должна быть в TS

// prices.push("2000");
// prices.push("Free");

// Массив строк (названия товаров)
// const products = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];

const products: string[] = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];

// products.push(100);

// Массив, содержащий только числа или только строки
// const ids1 = ["ID001", "ID002", "ID003"]; // Только строки

const ids1: number[] | string[] = ["ID001", "ID002", "ID003"];

// const ids2 = [101, 102, 103]; // Только числа

const ids2: number[] = [101, 102, 103];

// Массив с числами и строками одновременно
// const mixedValues = [1, "two", 3, "four", 5, "six"];

const mixedValues: (number | string)[] = [1, "two", 3, "four", 5, "six"];

// Массив булевых значений
// const toggles = [true, false, false, true, true];

const toggles: boolean[] = [true, false, false, true, true];

// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
// inStock = "yes"; // Ошибка в TS
// prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS
