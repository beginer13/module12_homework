
// Task2------------------------------------------------
// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

const animals = {
  cat: 'soft',
  fish:'wet',
  tiger: 'danger',
}

let prp = 'fish';

function checkProp (prop, obj) {
  let resultCheck
  if (prop in obj) {resultCheck = true}
   else {resultCheck = false}  
  return resultCheck;
}

console.log(checkProp(prp,animals))
