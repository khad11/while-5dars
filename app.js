/* 1-masala */

// // Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing. Input: getInitialOdds(5) Output: [1, 3, 5, 7, 9]

// const n = prompt("n sonini kiriting");
// let counter = 1;
// let result = [];

// while (result.length != n) {
//   if (counter % 2 == 1) {
//     result.push(counter);
//   }
//   counter++;
// }
// console.log(result);

/* 2-masala */

// // Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin. Input: [4, 5, 7, 8, 6, 9] Output: [6, 8, 4]

// const arr = [4, 5, 7, 8, 6, 9];
// const res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     res.push(arr[i]);
//   }
// }
// console.log(res.reverse());

/* 3-masala */

// Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],... Input: [4, 5, 7, 8, 6, 9] Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4

/* 4-masala */

// // Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// // Input: arr = [1, 6, 9, 5, 8, 10, 15];
// // Ouput: rangeSum(arr, 2, 5) => 32

// let arr = [1, 6, 9, 5, 8, 10, 15];
// let K = 2;
// let L = 5;
// let sum = 0;

// for (let i = K; i <= L; i++) {
//   sum += arr[i];
// }
// console.log(sum);

/* 5-masala */

// // Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin. Input: let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7] Output: [7, 4, 2, 3, 1, 5]

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

/* 6-masala */

// // Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin. Input: [7, 4, 9, 2, 3, 1, 5] Output: Max: 9 Min: 1 [7, 4, 1, 2, 3, 9, 5]

// let arr = [7, 4, 9, 2, 3, 1, 5];
// let max = 0;
// let min = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (min == 0) {
//     min = arr[i];
//   } else if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// const minIndex = arr.indexOf(min);
// const maxIndex = arr.indexOf(max);
// arr[minIndex] = max;
// arr[maxIndex] = min;
// console.log(arr);

/* 7-masala */

// // Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi. Input: [1, 5, 8, 9, 10] Output: [5, 8, 9, 10, 1]

// let arr = [1, 5, 8, 9, 10];
// let n = arr.length;
// let lastElement = arr[n - 1];

// for (let i = n - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = lastElement;

// console.log(arr);

// //UYGA VAZIFA

/* 1-masala */

//// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli ////funksiya tuzing. Input: 5 Output: [2, 4, 16, 32, 62]

// const num = 2;
// const n = prompt("Sonni kiriting:");
// let result = [];

// for (let i = 0; i < n; i++) {
//   result.push(num ** (i + 1));
// }
// console.log(result);

/* 2-masala */

//// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring. Input: n = 5, A = 2, B = 3 Output: [2, 3, 5, 10, 20]

// let n = 7;
// let a = 3;
// let b = 5;
// let result = [];

// result[0] = a;
// result[1] = b;
// for (let i = 0; i < n; i++) {
//   let counter = 0;
//   for (let k = 0; k < result.length; k++) {
//     counter += result[k];
//   }
//   result.push(counter);
// }
// console.log(result);

/* 3-masala */

// //n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const n = arr.length;

// for (let i = n - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

/* 4-masala */

//// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin. Massiv elementlar: 4 5 7 8 6 9 Natija: 5 7 9 toqlar soni =

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const n = arr.length;
// let result = [];
// let counter = 0;

// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 1) {
//     result.push(i);
//     counter++;
//   }
// }
// console.log(result);
// console.log(counter);

/* 5-masala */

//// n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin. Massiv elementlar: 45 7 8 6 9 Natija: 4 8 6 9 7 5

// let n = [4, 5, 7, 8, 6, 9];
// let k = [];
// for (i = 0; i < n.length; i++) {
//   if (n[i] % 2 == 0) {
//     k.push(n[i]);
//   }
// }
// for (i = n.length; i > 0; i--) {
//   if (n[i] % 2 == 1) {
//     k.push(n[i]);
//   }
// }
// console.log(k);

/* 6-masala */

//// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const n = arr.length;

// for (let i = 0; i < n; i += 2) {
//   console.log(arr[i]);
// }

/* 7-masala */

//// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const n = arr.length;

// for (let i = n - 1; i >= 0; i -= 2) {
//   console.log(arr[i]);
// }

/* 8- masala */

//// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const n = arr.length;

// for (let i = 0; i < n; i += 2) {
//   console.log(arr[i]);
// }
// for (let i = 1; i < n; i += 2) {
//   console.log(arr[i]);
// }

/* 9- masala */

//// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const n = arr.length;
// const toq = [];
// const juft = [];

// for (let i = 1; i < n; i += 2) {
//   toq.push(arr[i]);
// }
// for (let i = n - 2; i >= 0; i -= 2) {
//   juft.push(arr[i]);
// }
// const result = juft.concat(toq);
// console.log(result);

/* 10- masala */

//// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let n = arr.length;
// for (let i = 0; i < Math.ceil(n / 2); i++) {
//   if (i < n) {
//     console.log(arr[i]);
//   }
//   if (n - 1 - i > i) {
//     console.log(arr[n - 1 - i]);
//   }
// }

/* 11- masala */

// //Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const K = 2;
// const L = 5;
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (i < K || i > L) {
//     sum += arr[i];
//   }
// }

// console.log(sum);

/* 12- masala */

//// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling. Input: [10, false, “”, “Abdulaziz”, null]  Output: Truthy: [10, “Abdulaziz”] Falsy: [false, “”, null]

// const arr = [10, false, "", "Abdulaziz", null];
// const truthy = [];
// const falsy = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     truthy.push(arr[i]);
//   } else {
//     falsy.push(arr[i]);
//   }
// }

// console.log("Truthy:", truthy);
// console.log("Falsy:", falsy);
