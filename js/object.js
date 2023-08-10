// Object-1



// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// console.log(Object.entries(me).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(",") : value}`).join("\n"));
// console.log(`friends: ${me.friends.join("+")}`);




// Object-2



// const n = 5;
// const obj = {};

// for (let i = 1; i <= n; i++) {
//   obj[i] = i * i;
// }

// console.log(obj);




// Object-3



// const obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

// const keysSum = Object.keys(obj).reduce((sum, key) => sum + Number(key), 0);
// const valuesSum = Object.values(obj).reduce((sum, value) => sum + value, 0);

// console.log(keysSum + valuesSum);




// Object-4



// const strings = ["Abdulaziz", "Safarmurod", "O'rol", "Jahongir"];
// const obj = {};

// for (let i = 0; i < strings.length; i++) {
//   obj[strings[i]] = strings[i].length;
// }

// console.log(obj);




// Object-5



// const products = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};
// const total = Object.values(products).reduce((sum, price) => sum + price, 0);
// console.log(total);




// Object-6



// function defineObject(obj) {
//   return Object.keys(obj).every((key) => typeof key === "string");
// }

// const obj1 = {abc: 1, 123: 2, d: 5};
// const obj2 = {abc: 1, "123": 2, d: 5};

// console.log(defineObject(obj1)); 
// console.log(defineObject(obj2)); 




// Object-7



// const obj = { a: false, b: 12, c: true, d: 0 };

// for (let key in obj) {
//   if (!obj[key]) {
//     delete obj[key];
//   }
// }

// console.log(obj);




// Object-8



// const numbers = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const obj = {};

// for (let i = 0; i < numbers.length; i++) {
//   if (obj[numbers[i]]) {
//     obj[numbers[i]]++;
//   } else {
//     obj[numbers[i]] = 1;
//   }
// }

// console.log(obj);




// Object-9



// const number = 8945472985629;
// const obj = {};

// const numberString = number.toString();
// const length = numberString.length;

// const sections = {
//   birlar: numberString.slice(length - 3),
//   minglar: numberString.slice(length - 6, length - 3),
//   millionlar: numberString.slice(length - 9, length - 6),
//   milliardlar: numberString.slice(length - 12, length - 9),
//   trilionlar: numberString.slice(0, length - 12),
// };

// for (let key in sections) {
//   obj[key] = Number(sections[key]);
// }

// console.log(obj);




// Object-10



// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//   console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${readStatus};`);
// }




// Object-11



// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// const totalSum = products.reduce((sum, product) => sum + (product.price - (product.price * product.discount) / 100) * product.quantity, 0);
// console.log(totalSum);




// Object-12



// const obj = { "it": 20, "mushuk": 10, "sigir": 200, "tovuq": 2 };
// const arr = Object.entries(obj).flat();
// console.log(arr);




// Object-13



// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },	
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// const totalKredit = grades.reduce((sum, subject) => sum + subject.kredit, 0);
// const totalGrade = grades.reduce((sum, subject) => sum + subject.grade * subject.kredit, 0);
// const gpa = totalGrade / totalKredit;

// console.log(gpa);    




// Object-14



// const rightAnswers = {
//     1: "B",
//     2: "A",
//     3: "C",
//     4: "D",
//     5: "B",
//     6: "C",
//     7: "A",
//     8: 'D',
//     9: "A",
//     10: "B"
//   };
  
//   const myAnswers = {
//     1: "C",
//     2: "A",
//     3: "D",
//     4: "D",
//     5: "B",
//     6: "C",
//     7: "B",
//     8: "C",
//     9: "A",
//     10: "C"
//   };
  
//   let correctCount = 0;
//   let incorrectCount = 0;
  
//   for (let questionNumber in myAnswers) {
//     if (myAnswers[questionNumber] === rightAnswers[questionNumber]) {
//       correctCount++;
//     } else {
//       incorrectCount++;
//     }
//   }
  
//   console.log("Number of correct answers:", correctCount);
//   console.log("Number of incorrect answers:", incorrectCount);
  




// Object-15



//   let n = 3;
  
//   const obj = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: 6
//   };
  
//   function getMultipleValues(n) {
//     const res = {};
  
//     for (let key in obj) {
//       res[key] = obj[key] * n;
//     }
  
//     return res;
//   }
  
//   console.log(getMultipleValues(n));