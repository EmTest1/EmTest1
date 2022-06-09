// В программе объявлены две переменные start и end. 
// Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. 
// Результат выведите в консоль.

// Пример значений переменных:

// start = 0 end = 50
// Пример результата:

// 275
start = 0
end = 50 
for (i = 0; i <= end; i += 5) {
    start += i ;
   
}
console.log (start)

// В программе объявлена переменная word со строковым значением. 
// Переверните строку, используя цикл, и выведите результат в консоль.

// Пример значений переменных:
// word = "мир"

// Пример результата:
// "рим"

let word = prompt ('введите слово')
for (i = word.length-1; i >= 0; i--) {

    word += word[i];

}
word = word.slice(word.length/2)
console.log(word)


// В программе объявлена переменная word, в которой записано строковое значение. Определите, является ли word палиндромом:
// если является, выведите в консоль "Слово является палиндромом!";
// если не является, выведите в консоль "Слово не является палиндромом!".
// Примечание:
// Строка word состоит только из букв разного регистра (большие и маленькие).
// Пример значений переменных:
// word = "Доход"
// Пример результата:
// "Слово является палиндромом!"
let word1 = prompt ('введите слово')
let result; word1 = word.toLowerCase();
for (let i = 0; i <= Math.floor((word1.length-1)/2); i++){
    if (word1[i] != word1[word1.length - 1 - i]){
        result = "Слово не является палиндромом!";
        break;
    }
} 
if (!result) {
    result = "Слово является палиндромом!";
}

console.log(result);








