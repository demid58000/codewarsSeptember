/**
 * Функция склонения слова для числительного.
 * @param {number} count - Числительное.
 * @param {string} one - Вариант слова для цифры один (например: 1 "яблоко").
 * @param {string} two - Вариант слова для цифры два (например: 2 "яблока").
 * @param {string} five - Вариант слова для цифры пять (например: 5 "яблок").
 * @returns {string} Склоненное слово в зависимости от числительного.
 */
function declinationOfNumber(count, one, two, five) {
    let n = Math.abs(count % 100);
    if (n >= 11 && n <= 19) return five; // Исключаем диапазон чисел от 11 до 19 включительно

    let lastDigit = n % 10;
    switch(lastDigit) {
        case 1: return one;   // Если последняя цифра равна 1
        case 2: case 3: case 4: return two; // Если последняя цифра 2, 3 или 4
        default: return five; // Во всех остальных случаях используем форму множественного числа
    }
}