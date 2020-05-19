/*Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
    price: 10,
    discount: '15%',
... };
price.getPrice(); // 10 price.getPriceWithDiscount(); // 8.5*/

console.log('Задача № 2 ');


const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount(){
        return this.price - ((this.price * parseInt(this.discount)) / 100);
    }
};
console.log(price.getPrice());

console.log(price.getPriceWithDiscount());