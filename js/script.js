

/*ветвления - вывод кода в консоль, после проверки условия.
Если условие да то в консоле выведется код,
если нет -то кода в консоде не будет 
 if - если да то да 
*/

let firstName = 'Irina';
if (29 < 31) {
   console.log(firstName);
}
// if else - дефолтное выражение если условие не верно

let lastName = 'Buhaenko';
if (29 > 30) {
   console.log(lastName);
} else {
   console.log('Irina Buhaenko')
}

// else if - проверка нескольких
let myFamily = 'Buhaenko';
if (29 > 30) {
   console.log(myFamily);
} else if (30 > 31) {
   console.log('Irina Buhaenko')
} else if (27 > 31) {
   console.log(' Buhaenko Irina Sergeevna')
} else {
   console.log('Я вышла замуж и поменяла фамилию')
}


// cwitch
let km = 14;
switch (km) {
   case 10:
      console.log(10);
      break;
   case 11:
      console.log(11);
      break;
   case 12:
      console.log(12);
      break;
   case 13:
      console.log(13);
      break;
   case 14:
      console.log(14);
      break;
   case 15:
      console.log(15);
      break;
   default:
      console.log('not')
}


/*Циклы - повторение одного и того н раз*/
// while 

let i = 0;
while (i < 11) {
   console.log(i);
   i++;
}

// for
for (let it = 10; it < 20; it++) {
   console.log(it)
}


let w = 2;
do {
   console.log(w)
   w++;
} while (w > 3);

// функции - выполняет действие 

function sumChec(sum = 25, as = 55) {
   console.log(sum + as);
}
sumChec()


let num = function (a, b, c) {
   console.log(a + b + c);
}
num(5, 19, 8957);

let doc = (s, d) => {
   console.log(s + d);
}
doc(2, 80)