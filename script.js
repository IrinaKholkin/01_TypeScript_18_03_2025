var age = 30; // Под тип данных number входят значения: числа до 2 в 53 степени (а также NaN)
// age = "50";  - Ошибка типизации
var age1 = 30; // | - значение или
age1 = "50";
// let x = 50; // Пример неявной типизации
// х = "50";  - Ошибка типизации (при неявной типизации был определен тип number)
var flag = false;
flag = true;
// number, string, boolean, null, undefined       bigint(8888888n), symbol(str)
var arr = [1, 2, 3, 4];
// arr.push('5'); //Ошибка типизации
var arr1 = [1, 2, 3]; // здесь массив или чисел или строк, можно писать лишь один вариант
var arr2 = [1, '2', 3, '4']; // здесь массив, который может состоять и из чисел и из строк
console.log("Hello for Terminal!");
// HW 18.03.2025
// / Переменные разных типов
// let productName = "Laptop"; // Название товара
var productName = "Laptop";
// let price = 1499.99; // Цена товара
var price = 1499.99;
// price = "Expensive";
// let inStock = true; // Есть ли товар в наличии
var inStock = true;
// inStock = "yes";
// let discount = null; // Скидка пока не установлена
var discount = null;
// let warranty; // Переменная без значения (undefined)
var warranty;
// Переменная, которая может быть числом или строкой
// let productCode = 1010;
// productCode = "A1010";
var productCode = 1010;
// productCode = "A1010";  
// Массив чисел (цены товаров)
// const prices = [499, 1299, 799, 2499, 1599];
var prices = [499, 1299, 799, 2499, 1599];
// prices.push("2000"); // Ошибка должна быть в TS
// prices.push("2000");
// prices.push("Free");
// Массив строк (названия товаров)
// const products = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];
var products = ["Phone", "Tablet", "Monitor", "Keyboard", "Mouse"];
// products.push(100);
// Массив, содержащий только числа или только строки
// const ids1 = ["ID001", "ID002", "ID003"]; // Только строки
var ids1 = ["ID001", "ID002", "ID003"];
// const ids2 = [101, 102, 103]; // Только числа
var ids2 = [101, 102, 103];
// Массив с числами и строками одновременно
// const mixedValues = [1, "two", 3, "four", 5, "six"];
var mixedValues = [1, "two", 3, "four", 5, "six"];
// Массив булевых значений
// const toggles = [true, false, false, true, true];
var toggles = [true, false, false, true, true];
// Проверка значений (в TS тут должны появиться ошибки при несоответствии типов)
// price = "Expensive"; // Ошибка в TS
// inStock = "yes"; // Ошибка в TS
// prices.push("Free"); // Ошибка в TS
// products.push(100); // Ошибка в TS
