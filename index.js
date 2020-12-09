//2 задание
// alert("Привет, мир!");

//3 задание
// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin);

//4 задание
// let OurPlanetName = "земля";
// let currentUserName = "Джон";

//5 задание
// const birthday = '18.04.1982';//тут можно использовать заглавные буквы
// const age = someCode(birthday);//тут нельзя использовать заглавные буквы

//6 задание
// let name = "Ilya";
// alert( `hello ${1}` ); // выведет hello 1
// alert( `hello ${"name"}` ); // выведет hello name
// alert( `hello ${name}` ); // выведет hello Ilya

//7 задание
// let userName = prompt("Как вас зовут?");
// alert (userName);

//8 задание
// let a = 1, b = 1;
// let c = ++a; // ответ: 2
// let d = b++; // ответ: 2

//9 задание
// let a = 2; // ответ: 4
// let x = 1 + (a *= 2); // ответ: 5

//10 задание
// "" + 1 + 0 // ответ: "10"
// "" - 1 + 0 // ответ:  "1"
// true + false // ответ: непонятно
// 6 / "3" // ответ: 2
// "2" * "3" // ответ: 6
// 4 + 5 + "px" // ответ: 9px
// "$" + 4 + 5 // ответ: $45
// "4" - 2 // ответ: 2
// "4px" - 2 // ответ:  NaN
// 7 / 0 // ответ: Infinity
// "  -9  " + 5 // ответ: непонятно
// "  -9  " - 5 // ответ: непонятно
// null + 1 // ответ: 1
// undefined + 1 // ответ: NaN
// " \t \n" - 2 // ответ: -2

//11 задание
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b);

//12 задание
// 5 > 4 // ответ: true
// "ананас" > "яблоко" // ответ: false
// "2" > "12" // ответ: true
// undefined == null // ответ: true
// undefined === null // ответ: false
// null == "\n0\n" // ответ: false
// null === +"\n0\n" // ответ: false

//13 задание
// if ("0") {
//   alert("Привет"); // alert выведется
// }

//14 задание
// let jsName = prompt('Какое "официальное" название JavaScript?', "");

// if (jsName === "ECMAScript") {
//   alert("Правильно");
// } else {
//   alert("Не знаете? ECMAScript");
// }

//15 задание
// let value = prompt("Введите число");

// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//16 задание <------- Вот это вообще не понял
// let result;
// result = a + b < 4 ? "Мало" : "Много";

//17 задание // <------- и это тоже)
// let message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";

//18 задание
// alert(null || 2 || undefined); // Выведет 2

//19 задание
// alert( alert(1) || 2 || alert(3) ); // Выведет 1

//20 задание
// alert( 1 && null && 2 ); // Выведет null

//21 задание
// alert(null || (2 && 3) || 4); // Выведет 3

//22 задание
// let age;
// if (age >= 14 && age <= 90);

//23 задание
// let age;
// if (!(age >= 14 && age <= 90));

// if (age < 14 || age > 90);

//24 задание
// if (-1 || 0) alert( 'first' ); // Выполнится
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' ); // Выполнится

//25 задание
// let login = prompt("Введите логин", "");

// if ((login = "Админ")) {
//   let password = prompt("Введите пароль");
//   if (password === "Я главный") {
//     alert("Здравствуйте");
//   } else if (password == "" || password === null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (login === "" || login === null) {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

//26 задание // Последним выведет 1, потому что после 1 идёт 0,а на 0 цикл перестаёт работать
// let i = 3;

// while (i) {
//   alert(i--);
// }

//27 задание
// let i = 0;
// while (++i < 5) alert(i); // Будет выводить начиная с 1, заканчивая 5

// let i = 0;
// while (i++ < 5) alert(i); // Тоже самое  (?)

//28 задание
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

//29 задание
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

//30 задание
// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

//31 задание
// let browser;
// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }
//32 задание
// const number = +prompt("Введите число между 0 и 3", "");

// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;

//   case 1:
//     alert("Вы ввели число 1");
//     break;

//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }
