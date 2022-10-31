Задание №1.<br>
Напишите программу, которая спрашивает у пользователя его имя и фамилию с помощью prompt<br>
и отвечает: Привет, {имя и фамилия}! с помощью alert.

Задание №2.<br>
Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту.<br>
Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt<br>
и ответить: {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.

Задание №3.<br>
Перепишите данную математическую формулу (формула была на картинке в виде дробей), используя JavaScript.<br>
Программа должна запрашивать с помощью prompt значение X и выдавать соответсвующее значение Y в качестве ответа.<br>
Обратите внимание на приоритет операций (важно правильно расставить скобки).<br>
В качестве проверки: при X = 10 программа должна вывести Y = 12.5344.

Задание №4.<br>
Оператор typeof в JavaScript возвращает строку с типом данных переданного в него значения. Эта строка начинается с маленькой буквы.<br>
Например: typeof 123 вернёт строку 'number', а typeof undefined вернёт строку 'undefined'.<br>
Все возможные значения typeof: 'undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function'.<br>
ВНИМАНИЕ! Из-за особенностей JavaScript typeof null вернёт 'object'. Запомните это и учтите при выполнении задания.<br>
Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.

Исходный код:

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5'

at = typeof a === 'number'; // true
bt = typeof b === 'SOME'; // false, а нужно чтобы все были true
ct = typeof c === 'SOME';
dt = typeof d === 'SOME';
et = typeof e === 'SOME';
ft = typeof f === 'SOME';
gt = typeof g === 'SOME';
ht = typeof h === 'SOME';
it = typeof i === 'SOME';
jt = typeof j === 'SOME';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

Задание №5.
Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение.<br>
Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let. И никогда не используйте var.
Исходный код:

NDS = 0.20
NDFL = 0.13
EXCISE = 0.1
RENT = 40000
FOOD = 15000
OTHER = 15000
MY_SALARY = 120000

ndflTax = MY_SALARY _ NDFL;
mySalaryNet = MY_SALARY - ndflTax;
otherTaxes = mySalaryNet _ (NDS + EXCISE);
totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')
