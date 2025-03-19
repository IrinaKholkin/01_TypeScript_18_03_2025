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

let discount: null | number = null;

// let warranty; // Переменная без значения (undefined)

let warranty: undefined | string;

// Переменная, которая может быть числом или строкой
// let productCode = 1010;
// productCode = "A1010";

let productCode: number | string = 1010;
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

// Либо строка, либо массив чисел
const mixedValues1: string | number[] = [1, 3, 5];

// Либо массив чисел, либо массив строк
const mixedValues2: string[] | number[] = ["two", "four", "six"];

// Массив булевых значений
// const toggles = [true, false, false, true, true];

const toggles: boolean[] = [true, false, false, true, true];

// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
// inStock = "yes"; // Ошибка в TS
// prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS
