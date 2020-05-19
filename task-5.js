/*
Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

*/

console.log('Задача № 5 ');

const prod1 ={   
                price: 100,
                kol:2,
                allPrice () {
                  let All=   this.price * this.kol;
                    return All; 
                } 
             };

console.log(prod1.allPrice ());
