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
Оператор typeof в JavaScript возвращает строку с типом данных переданного в него значения.<br>
Эта строка начинается с маленькой буквы.<br>
Например: typeof 123 вернёт строку 'number', а typeof undefined вернёт строку 'undefined'.<br>
Все возможные значения typeof: 'undefined', 'object', 'boolean', 'number', 'bigint', 'string', 'symbol', 'function'.<br>
ВНИМАНИЕ! Из-за особенностей JavaScript typeof null вернёт 'object'. Запомните это и учтите при выполнении задания.<br>
Найдите в коде строки 'SOME' и напишите вместо них нужное название типа — так, чтобы при запуске кода alert написал 'true'.

Исходный код:

a = 12;<br>
b = 'number';<br>
c = false;<br>
d = null;<br>
e = undefined;<br>
f = 123.34;<br>
g = '1' + 1;<br>
h = 15 / 0;<br>
i = -'5';<br>
j = 5 == '5'<br>

at = typeof a === 'number'; // true<br>
bt = typeof b === 'SOME'; // false, а нужно чтобы все были true<br>
ct = typeof c === 'SOME';<br>
dt = typeof d === 'SOME';<br>
et = typeof e === 'SOME';<br>
ft = typeof f === 'SOME';<br>
gt = typeof g === 'SOME';<br>
ht = typeof h === 'SOME';<br>
it = typeof i === 'SOME';<br>
jt = typeof j === 'SOME';<br>

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);<br>

Задание №5.<br>
Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение.<br>
Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let.<br>
И никогда не используйте var.<br>
Исходный код:

NDS = 0.20<br>
NDFL = 0.13<br>
EXCISE = 0.1<br>
RENT = 40000<br>
FOOD = 15000<br>
OTHER = 15000<br>
MY_SALARY = 120000<br>

ndflTax = MY_SALARY _ NDFL;<br>
mySalaryNet = MY_SALARY - ndflTax;<br>
otherTaxes = mySalaryNet _ (NDS + EXCISE);<br>
totalAvailable = mySalaryNet - otherTaxes;<br>
totalAvailable -= FOOD + OTHER + RENT<br>
alert('Зарплата ' + MY_SALARY + ' рублей')<br>
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')<br>
alert('Осталось ' + totalAvailable + ' рублей')<br>
