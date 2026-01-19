function isStringLengthValid(text, maxLimit){
  return text.length <= maxLimit;
}
isStringLengthValid('проверяемая строка', 20);
isStringLengthValid('проверяемая строка', 18);
isStringLengthValid('проверяемая строка', 10);

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
isPalindromValid('топот');
isPalindromValid('ДовОд');
isPalindromValid('Кекс');

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

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber((2023));
getNumber((-1));
getNumber((1.5));


function checkTimeMeeting (workStartTime, workEndTime, startTime, meetingDuration) {
  function convertTime(timeString) {
    const parts = timeString.split(':');
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
  }
  const endTime = convertTime(startTime) + meetingDuration;
  if (convertTime(workStartTime) > convertTime(startTime) || convertTime(workEndTime) < endTime) {
    return false;
  }
  return true;
}
checkTimeMeeting ('08:00', '17:30', '14:00', 90);
checkTimeMeeting ('8:0', '10:0', '8:0', 120);
checkTimeMeeting ('08:00', '14:30', '14:00', 90);
checkTimeMeeting ('14:00', '17:30', '08:0', 90);
checkTimeMeeting ('8:00', '17:30', '08:00', 900);


