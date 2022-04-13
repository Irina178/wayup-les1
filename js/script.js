
'use strict'
//создание объекта
// let student = {
//    name: 'Irina',
//    surname: 'Bugaenko',
//    age: 30,
//    address: {
//       citu: 'Odessa',
//       strect: 'Lugova',
//    }
// }
// console.log(student);
// console.log(student['age'])
// console.log(student.address['citu']);
// // добавление свойств 
// student.vus = 'ODABA';
// console.log(student)
// const moonher = {
//    namem: 'Julia',
//    surnamem: 'Buhaenko',
//    age: 45,
//    addressm: {
//       citum: 'Odessa',
//       streect: 'Lugova',
//    }
// }
// console.log(moonher);
// console.log(moonher.age);
// console.log(moonher.addressm['streect']);
// // добавление свойств 
// moonher.vus = 'KNUBA';
// console.log(moonher);
// let sister = {
//    names: 'Julia',
//    family: 'Alexsandrova',
//    ade: 36,
//    address: {
//       city: 'Nikolaiv',
//       strects: 'Mira',
//    }
// }
// console.log(sister);
// console.log(sister.address['strects']);
// // добавление свойств 
// sister.vus = 'SVAZ';
// console.log(sister);

// let faanher = {
//    name: 'Sergey',
//    surname: 'Buhaenko',
//    age: 47,

// }
// console.log(faanher);


// // добавления объкта внутырь объекта 
// let megasine = {
//    bread: 1,
//    milk: 2,
// }
// console.log(megasine);
// megasine.products = {
//    shampoo: 2,
//    balm: 1
// }
// console.log(megasine);
// console.log(typeof (megasine.bread))
// delete megasine.products.shampoo;
// console.log(megasine)
// let baser = {
//    mane: 'Klavdia',
// }
// console.log(baser);
// baser.address = {
//    citu: ' Revovo',
//    strect: 'Girna',
// }
// console.log(baser)
// delete baser.address;
// console.log(baser)

// let diser = {
//    name: 'Nikola',
//    surname: 'Ivanov',
// }
// console.log(diser)

// diser.address = {
//    citu: "Peterbugr",
//    age: 80,
// }
// console.log(diser)
// diser.age = 82;
// console.log(diser)

//копирование обхектов
// let hom = {
//    citu: 'Odessa',
//    rain: 'Malina',
//    strect: 'Lugova',
//    numder: 27,
// }
// console.log(hom);
// let homTwoo = hom;
// homTwoo.numder = 32;
// console.log(hom);
// console.log(homTwoo);


// let circl = {
//    one: 2,
//    twoo: 4,
// }
// console.log(circl);
// let circlTwoo = circl;
// circlTwoo.one = 8;

// console.log(circl);
// circlTwoo.three = 25;
// console.log(circlTwoo);

// let apartmens = {
//    mather: 1,
//    faser: 1,
//    sister: 1,
// }
// console.log(apartmens)
// let apartmensTwoo = apartmens;
// apartmensTwoo.doc = 1;
// apartmensTwoo.cet = 3;
// apartmensTwoo.iam = 1;
// console.log(apartmensTwoo);
// console.log(apartmens);
// delete apartmens.sister;
// console.log(apartmens);

// // дублирование объекта
// let megasine = {
//    product: 100,
//    colors: 500,
//    cans: 120,
// }
// console.log(megasine);
// let megasineOtd = Object.assign({}, megasine)
// console.log(megasineOtd);

// let arbaitenKyiv = {

//    twoo: 'KNUBA',
//    three: 'KP',
//    Four: 'ABS',
// }

// console.log(arbaitenKyiv);
// let arbaitenOdessa = Object.assign({}, arbaitenKyiv);
// console.log(arbaitenOdessa);
// arbaitenOdessa.one = 'OGASA';
// delete arbaitenOdessa.twoo;
// delete arbaitenOdessa.three;
// delete arbaitenOdessa.Four;
// console.log(arbaitenOdessa)

// const tehnicks = {
//    tv: 3,
//    notBuce: 2
// }
// let newTehnics = Object.assign({}, tehnicks)
// console.log(newTehnics);
// console.log(tehnicks);

// let one = {
//    a: 1,
//    s: 3,
// }
// console.log(one);
// for (let key in one) {
//    console.log(key)
//    console.log(one[key])
// }
/**Массив — структура данных для хранения и манипулирования коллекцией индексированных значений.
 Используются для хранения упорядоченных коллекций данных, 
 например списка курортов, товаров, клиентов в отеле и т. п. */
//Сохдания массива
let arr = [
   'Irina',
   'Julia',
   'jeck',
   'Alex',
]
console.log(arr);
console.log(arr[2]);
//длина массива
console.log(arr.length);
//копирование массива - агадлгтично копии объекта
let array = [

   'jeck',
   'Alex',
]

let newArr = array;
console.log(newArr);
console.log(array);
//укоротить массив
let ms = [

   'jeck',
   'Alex',
]
console.log(ms)
ms.length = 1
console.log(ms)
// Изменить знвчения 


let arname = [
   'Ваня',
   ' Петя',
   'Коля',
]
console.log(arname);
arname[1] = 'Василиса';
console.log(arname)
// Добавить новое значение в массив
arname[3] = 'Алекс';
console.log(arname)
// МЕТОДЫ МАССИВОВ
// Метод push - добавляет элемент в конец массива
let ar = ['Ваня', 'Иштван', 'Оля',];
ar.push('Вася');
console.log(ar);

ar.push('Дима', 'Катя');
console.log(ar);
// Метод shift - удаляет элемент в начале,
// так что второй элемент становится первым.
let a = ['Ваня', 'Иштван', 'Оля',];
a.shift();
console.log(a);
// Метод pop  - удаляет последний элемент

let r = ['Ваня', 'Иштван', 'Оля',];
r.pop();
console.log(r);
// Метод unshift  - добавляет элемент в начало массива

let rr = ['Ваня', 'Иштван', 'Оля',];
rr.unshift('Вася');
console.log(rr);

rr.unshift('Дима', 'Катя');
console.log(rr);



