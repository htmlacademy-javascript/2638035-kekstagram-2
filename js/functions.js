function isStringLengthValid(text, maxLimit){
  return text.length <= maxLimit;
}
// Строка короче 20 символов
console.log(isStringLengthValid('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(isStringLengthValid('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(isStringLengthValid('проверяемая строка', 10)); // false


function isPalindromValid(text) {
  const cleanedText = text.toLowerCase().replaceAll(' ', '');
  const left = 0;
  const right = cleanedText.length - 1;
  let newText = '';
  for (let i = right; i >= left; i--) {
    newText += cleanedText[i];
  }

  return (newText === cleanedText);
}

// Строка является палиндромом
console.log(isPalindromValid('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindromValid('ДовОд')); // true
// Это не палиндром
console.log(isPalindromValid('Кекс')); // false


//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

function getNumber (text) {
  text = text.toString();
  let count = '';

  for (let i = 0; i < text.length; i++){
    if (text[i] >= '0' && text[i] <= '9') {
      count += text[i];
    }
  }
  if (count === '') {
    return NaN;
  }

  return Number(count);
}

console.log(getNumber('2023 год'));// 2023
console.log(getNumber('ECMAScript 2022'));// 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007'));// 7
console.log(getNumber('а я томат'));// NaN
console.log(getNumber((2023)));// 2023
console.log(getNumber((-1)));// 1
console.log(getNumber((1.5)));// 15
