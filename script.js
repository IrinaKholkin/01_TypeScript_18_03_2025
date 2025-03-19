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
// type Person = {
//     age: 38,
//     name: "Bill"
//     }
var person = {
    age: 38,
    name: "Bill"
};
var direction = "left";
direction = "right";
direction = "up";
direction = "down";
// direction = "eight"; Ошибка типизации значения переменной direction
var sum = function (a, b) {
    return (a + b > 100 ?
        a + b :
        a + b + "");
};
console.log(sum(2, 5));
// console.log(sum('2', 5)); //Примеры ошибок типизации параметров
// console.log(sum(true, 5)); //Примеры ошибок типизации параметров
