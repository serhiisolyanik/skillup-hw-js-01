//  Задание 4. Преобразование примитивов
(function assignment4() {
  // При каждых операциях сравнения, математических и т.п. преобразовываются данные, где 0, null и undefined = это false; а string, другие числа и объекты (включая массивы) - true
  let a = 0 || "string"; // а = 'string'  |(|| возвращает истинное значение или последнее ложное)
  a = 1 && "string"; // a = 'string' |(&& возвращает ложное значение или последнее истинное)
  a = null || 25; // a = 25
  a = null && 25; // a = null
  a = null || 0 || 35; // a = 35
  a = null && 0 && 35; // a = null

  12 + 14 + "12"; // 2612   |сначала будет сложение чисел, потом неявное преобразование в строку и конкатенация
  3 + 2 - "1"; // 4         |сначала будет сложение чисел, потом неявное преобразование в число и вычитание
  "3" + 2 - 1; // 31        |сначала конкатенация пото преобразование к числу и вычитание
  true + 2; // 3            |true неявно преобразовывается в число 1
  +"10" + 1; // 11          |преобразование в число так как +'10', если + убрать то преобразование будет в строку
  undefined + 2; // NaN     |undefined преобразовывается в NaN
  null + 5; // 5            |null преобразуется в 0
  true + undefined; // NaN  |undefined преобразовывается в NaN
  5 + "34"; // 534
  5 - "4"; // 1
  10 % 5; // 0              |деление без остатка
  5 % 10; // 5
  "Java" + "Script"; // "JavaScript"
  " " + " "; // "  "
  " " + 0; // 0
  true + true; // 2
  true + false; // 1
  false + true; // 1
  false - true; // -1
  3 - 4; // -1
  "Bob" - "bill"; // NaN    | при вычитании буквенных строк происходит преобразование в не число.
})();