const firstNum = prompt("Введите первое число");
const secondNum = prompt("Введите второе число");
const thirdNum = prompt("Введите третье число");
// запрашивам три числа
if ((firstNum > secondNum, firstNum > thirdNum)) {
  // согласно условию задания не используем логический оператор "&&" (И)
  alert(`Число ${firstNum} максимальное`);
} else if ((secondNum > firstNum, secondNum > thirdNum)) {
  alert(`Число ${secondNum} максимальное`);
} else if ((thirdNum > firstNum, thirdNum > secondNum)) {
  alert(`Число ${thirdNum} максимальное`);
}
// с помощью операторов сравнения определяем наибольшее число, и выводим его значение
