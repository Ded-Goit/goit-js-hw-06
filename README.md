# goit-js-hw-06

                          js 6 homework

           Задача 1. Акаунт користувача   Task 1. User Account

Перед звільненням розробник зламав вихідний код управління акаунтами
користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта
customer, розставивши відсутні this під час звернення до властивостей об'єкта.

Before being fired, a developer hacked the source code for managing user
accounts for our food delivery service. Refactor the customer object methods by
placing the missing this when accessing the object properties.

           Задача 2. Склад   Task 2. Warehouse

Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
Клас очікує лише один аргумент — початковий масив товарів, який записується до
створеного об'єкта в приватну властивість items. Оголоси наступні методи класу:
getItems() — повертає масив поточних товарів у приватній властивості items.
addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у
приватну властивість items об'єкта. removeItem(itemToRemove) — приймає рядок з
назвою товару itemToRemove і видаляє його з масиву товарів у приватній
властивості items об'єкта.

Create a Storage class that will create objects for managing the warehouse of
goods. The class expects only one argument — the initial array of goods, which
is written to the created object in the private property items. Declare the
following methods of the class: getItems() — returns an array of current goods
in the private property items. addItem(newItem) — accepts a new item newItem and
adds it to the array of goods in the private property items of the object.
removeItem(itemToRemove) — accepts a string with the name of the item
itemToRemove and removes it from the array of goods in the private property
items of the object.

           Задача 3. Конструктор рядків Task 3. String Builder

Напиши клас StringBuilder, який приймає один параметр initialValue — довільний
рядок, який записується у приватну властивість value об'єкта, що створюється.
Оголоси наступні методи класу: getValue() — повертає поточне значення приватної
властивості value. padEnd(str) — отримує параметр str (рядок) і додає його в
кінець значення приватної властивості value об'єкта, який викликає цей метод.
padStart(str) — отримує параметр str (рядок) і додає його на початок значення
приватної властивості value об'єкта, який викликає цей метод. padBoth(str) —
отримує параметр str (рядок) і додає його на початок і в кінець значення
приватної властивості value об'єкта, який викликає цей метод.

Write a StringBuilder class that takes one parameter initialValue — an arbitrary
string that is written to the private value property of the object being
created. Declare the following class methods: getValue() — returns the current
value of the private value property. padEnd(str) — gets the str (string)
parameter and adds it to the end of the value of the private value property of
the object that calls this method. padStart(str) — gets the str (string)
parameter and adds it to the beginning of the value of the private value
property of the object that calls this method. padBoth(str) — gets the str
(string) parameter and adds it to the beginning and end of the value of the
private value property of the object that calls this method.

           https://www.freecodecamp.org/learn/full-stack-developer/
