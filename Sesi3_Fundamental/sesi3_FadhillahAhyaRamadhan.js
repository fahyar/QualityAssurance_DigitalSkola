/* Digital Skola - 
Programming Fundamental - Sesi 3 
Nama: Fadhillah Ahya Ramadhan
Program: Left Aligned StarPyramid 4 Row
*/

let star = "";
let row = 4;

// for (i = 1; i <= row; i++) {
//   console.log(star.repeat(i));
// }

for (let i = 1; i <= row; i++) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += " \n";
}
console.log(star);
