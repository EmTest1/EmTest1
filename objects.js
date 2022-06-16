/* В программе объявлена переменная obj, содержащая объект с подобным набором значений:
{
        "Яблоко": "фрукт",
        "Арбуз": "ягода",
        "Помидор": "овощ",
        "Огурец": "овощ",
        "Вишня": "ягода"
}
Напишите скрипт, который формирует новый объект со значениями и их количеством.
Выведите новый объект в консоль.
Пример результата:
{
    "фрукт": 1,
    "ягода": 2,
    "овощ": 2
} */

const obj = {
  Яблоко: "фрукт",
  Арбуз: "ягода",
  Помидор: "овощ",
  Огурец: "овощ",
  Вишня: "ягода",
};

function solve(obj) {
  return Object.values(obj).reduce((result, name) => {
    if (result[name]) {
      result[name]++;
    } else {
      result[name] = 1;
    }

    return result;
  }, {});
}

console.log(solve(obj));

/* В программе объявлена переменная list, в которую записан массив из объектов. 
В каждом объекте записаны название продукта и его стоимость.
Выведите в консоль название продукта, цена которого является максимальной в заданном массиве.
Если таких несколько, выведите название первого из них.
Пример значений переменных:
 list = [
 {product: "Apple", price: 25},
 {product: "Cherry", price: 32},
 {product: "Strawberry", price: 45}
]
Пример результата:
"Strawberry" */

const list = [
  { product: "Apple", price: 25 },
  { product: "Cherry", price: 32 },
  { product: "Strawberry", price: 45 },
];

const maxPrice = list.filter((nameProduct) => nameProduct.product == "Apple");
const maxPrice1 = list.filter((nameProduct) => nameProduct.product == "Cherry");
const maxPrice2 = list.filter((nameProduct) => nameProduct.product == "Strawberry");



