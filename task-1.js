/*Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры const rectangle = {width:..., height:..., getSquare:...};*/

console.log('Задача № 1 ');

const rectangle = {
                    width:2, 
                    height:2, 
                    getSquare ()  
                    {return this.width * this.height}
                  };

console.log(rectangle.getSquare());
