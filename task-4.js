/*Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
    value: 1,
    double: function () {...},
    plusOne: function () {...},
    minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3*/

console.log('Задача № 4 ');



const numerator = {
    value: 1,
    doubles () {
        this.value*=2;
        return this;
    },
    plusOne () {
        this.value++;
        return this;
    },
    minusOne () {
        this.value--;
        return this;
    }
};

numerator.doubles().plusOne().plusOne().minusOne();
console.log(numerator.value); 
