// let tempCelcium = 10;
// let tempPhareng = (9 / 5) * tempCelcium + 32;
// console.log(`Температура в Цельсиях = ${tempCelcium} Температура в Фаренгейтах = ${tempPhareng}`);

// let name = "Alena";
// let admin = name;
// console.log(admin);


// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// let num1 = prompt(`Введите 1 число`);
// let num2 = prompt(`Введите 2 число`);
// if(num1 <= 1) {
//     alert(`Число 1 входит в диапазон`);
// } else {
//     alert(`Число 1 не входит в диапазон`);
// }
// if(num2 >= 3) {
//     alert(`Число 2 входит в диапазон`);
// } else {
//     alert(`Число 2 не входит в диапазон`);
// }


// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// let test = true;
// (test === true) ? console.log('+++') : console.log('---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = prompt(`Введите число из интервала от 1 до 31`);
// if (day >= 1 && day < 10) {
//     alert(`Первая декада`);
// } else if (day >= 10 && day <= 20){
//     alert(`Вторая декада`);
// } else if (day > 20 && day <= 31){
//     alert(`Третья декада`);
// }

// Задание 4

// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.

// let num = parseInt(prompt(`Введите число`));
// let edinic = num%10;
// let desyatkov = Math.trunc(num/10)%10;
// let soten = Math.trunc(num/100)%10;
// alert(`В числе ${num} количество сотен: ${soten}, десятков: ${desyatkov}, единиц ${edinic}`);





// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// function squareCube(params) {
//     return params ** 3; 
// }

// let num1 = 2;
// let num2 = 3;
// console.log(`сумма кубов = ${squareCube(num1) + squareCube(num2)}`);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let num = prompt('Ведите число');
// if (Number.isNaN(Number(num))) {
//     alert('значение задано неверно');
// }

// function zarplata(params) {
//     console.log(`Размер заработной платы за вычетом налогов равен ${params * 0.87}`);
// }

// zarplata(num);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));
// let num3 = Number(prompt('Введите третье число'));

// function maxNumber(a, b, c) {
    
//     if( a > b && a > c) {
//         let max = a;
//         console.log (`максимальное значение ${max}`);
//     }
//     else if ( b > a && b > c) {
//         let max = b;
//         console.log (`максимальное значение ${max}`);
//     }
//     else {
//         let max = c;
//         console.log (`максимальное значение ${max}`);
//     }
// }

// maxNumber(num1, num2, num3);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

function summa(a, b) {
    console.log(`Сумма чисел = ${a + b}`);
}

function raznost(a, b) {
    console.log(`Разность чисел = ${a - b}`);
}

function proizvedenie(a, b) {
    console.log(`Произведение чисел = ${a * b}`);
}

function delenie(a, b) {
    console.log(`Деление чисел = ${a / b}`);
}

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

summa(num1, num2);
raznost(num1, num2);
proizvedenie(num1, num2);
delenie(num1, num2);