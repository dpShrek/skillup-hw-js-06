/*Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:

object.height = 10;

object.inc(); // придумать свое название для метода

object.height; // 11;
*/

console.log('Задача № 3 ');

    const newObjHie = {     height: 10, 
                            incOne: function() {
                            
                            return this.height++;
                            }   
                      };
newObjHie.incOne();
console.log(newObjHie.height);
