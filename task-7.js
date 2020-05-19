/*
Даны объект и функция:

let sizes = {width: 5, height: 10},

getSquare = function () {return this.width * this.height};

Не изменяя функцию или объект, получить результат функции

getSquare для объекта sizes

*/

console.log('Задача № 7 ');

let sizes = {width: 5, height: 10, 
            getSquare: function () {return this.width * this.height}};

let fff = sizes.getSquare();
console.log(fff);


