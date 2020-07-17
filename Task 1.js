//Task1 ---------------------------------------------------------------------------------

// Написать, функцию, которая принимает в качестве аргумента объект и 
// выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

  const creatures = {
  mainprop: 'live',
}

const animals = Object.create(creatures);
animals.cat ='soft';
animals.fish = 'wet';
animals.tiger = 'danger';

function ownprop(obj) {
  for (let key in obj){
  if (animals.hasOwnProperty(key)){console.log('key: ' + key);
                                   console.log('value: ' + obj[key]);
                                  }
  };
};

ownprop (animals);