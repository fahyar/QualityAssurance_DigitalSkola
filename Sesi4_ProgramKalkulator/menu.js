//Tugas Sesi 4 Program Kalkulator
//menu js
//Nama : Fadhillah Ahya Ramadhan
import { kalkulator } from "./rumus.js";
import readline from "readline";

//Membuat interface dengan readline untuk input angka dan operator
const inputKalkulator = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Masukkan angka dan operator
inputKalkulator.question("Masukkan angka pertama: ", (angka1) => {
  inputKalkulator.question("Masukkan angka kedua: ", (angka2) => {
    inputKalkulator.question(
      "Masukkkan operator (+, - , * , /): ",
      (operator) => {
        console.log(`
                Hasil: ${kalkulator(
                  parseFloat(angka1),
                  parseFloat(angka2),
                  operator,
                )}
                `);
        inputKalkulator.close();
      },
    );
  });
});
