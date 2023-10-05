// Ejercicio 1
const countCharacters = (text) => {
  console.log(`La cadena "${text}" tiene ${text.length} caracteres`);
};

// Ejercicio 2
const sliceWord = (word, extract) => {
  console.log(word.slice(0, extract));
};

// Ejercicio 3
const splitString = (string, separator) => {
  console.log(string.split(separator));
};

// Ejercicio 4
const getDiscount = (price, discount) => {
  let finalPrice = price - price * (discount / 100);
  console.log(
    `El precio es de $${price} (sin descuento). El precio con un descuento de ${discount} es de: $${finalPrice}`
  );
};

// Ejercicio 5
const calculateAge = (age) => {
  let currentYear = new Date().getFullYear();
  let yearBirth = age.getFullYear();
  console.log(`Tienes: ${currentYear - yearBirth} años`);
};

// Ejercicio 6
const decimalToRoman = (num) => {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];
  let romanNumeral = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  console.log(romanNumeral);
};

// Ejercicio 7
const decimalToBinary = (decimal) => {
  console.log(`${decimal} = ${decimal.toString(2)}`);
};

// Ejercicio 8
const vowelsInString = (string) => {
  console.log(`${string} = ${string.match(/[aeiou]/gi).length}`);
};

// Ejercicio 9
const checkPalindrome = (string) => {
  const arrayValues = string.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');

  if (string == reverseString) {
    console.log(`${string} = true`);
  } else {
    console.log(`${string} = false`);
  }
};

// Ejercicio 10
const quitSpaceString = (string) => {
  console.log(`${string} = ${string.replace(' ', '')}`);
};

// Ejercicio 11
const firstToUpperCase = (string) => {
  console.log(
    string
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('')
  );
};

// Ejercicio 12
const wordCount = (string) => {
  console.log(`${string} = ${string.split(' ').length}`);
};

// Ejercicio 13
const stCharToUpperCase = (string) => {
  const upperCase = string
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  console.log(`${string} = ${upperCase}`);
};

// Ejercicio 14
const reverseString = (string) => {
  const reversedString = string.split('').reverse().join('');
  console.log(`${string} = ${reversedString}`);
};

// Ejercicio 15
const sumArray = (array) => {
  let sum = 0;
  array.map((num) => (sum += num));
  console.log(`La suma de todos los numeros es ${sum}`);
};

// Ejercicio 16
const greaterLessAge = (array) => {
  let sortedArray = array.sort((a, b) => a - b);
  console.log(
    `La edad mayor es ${
      sortedArray[sortedArray.length - 1]
    } y la edad menor es ${sortedArray[0]}`
  );
};

// Ejercicio 17
const checkGrades = (grade) => {
  if (grade >= 0 && grade <= 5) {
    console.log(`${grade} = Pésimo`);
  }
  if (grade >= 6 && grade <= 7) {
    console.log(`${grade} = Regular`);
  }
  if (grade >= 8 && grade <= 9) {
    console.log(`${grade} = Bueno`);
  }
  if (grade === 10) {
    console.log(`${grade} = Excelente`);
  }
};

// Ejercicio 18
const lenghtNumber = (number) => {
  console.log(`${number} = ${number.toString().length} cifras`);
};

// Ejercicio 19
const primeNumbers = () => {
  let arrayPrimeNumbers = [];
  for (let i = 2; i <= 1000; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      arrayPrimeNumbers.push(i);
    }
  }
  console.log(arrayPrimeNumbers);
};

// Ejercicio 20
const rockPaperScissor = (player1, player2) => {
  if (player1 === player2) {
    return console.log('Empate');
  } else {
    if (player1 === 'piedra') {
      if (player2 === 'papel') {
        return console.log('Gana papel');
      } else {
        return console.log('Gana piedra');
      }
    }
    if (player1 === 'papel') {
      if (player2 === 'tijera') {
        return console.log('Gana tijera');
      } else {
        return console.log('Gana papel');
      }
    }
    if (player1 === 'tijera') {
      if (player2 === 'papel') {
        return console.log('Gana papel');
      } else {
        return console.log('Gana tijera');
      }
    }
  }
};

// Ejercicio 21
const functionTimer = () => {
  setInterval(() => console.log('Hola mundo'), 3000);
};
