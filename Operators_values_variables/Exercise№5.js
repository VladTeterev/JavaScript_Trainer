const NDS = 0.2;
const NDFL = 0.13;
const EXCISE = 0.1;
const RENT = 40000;
const FOOD = 15000;
const OTHER = 15000;
const MY_SALARY = 120000;
// объявляем переменные значение которых не будет меняться с помощью ключевого слова "const"
const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT;
/*объявляю переменную с помощью ключевого слова "let",
потому что по ходу выполнения вычислений переменной присваивается новое значение*/
alert("Зарплата " + MY_SALARY + " рублей");
alert("Уплачено налогов на сумму " + (ndflTax + otherTaxes) + " рублей");
alert("Осталось " + totalAvailable + " рублей");
