//Tugas Sesi 4 Program Kalkulator
//rumus js
//Nama : Fadhillah Ahya Ramadhan

export function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case "+":
      return angka1 + angka2;
    case "-":
      return angka1 - angka2;
    case "*":
      return angka1 * angka2;
    case "/":
      return angka1 / angka2;
    default:
      return "Operator tidak sesuai!!";
  }
}

export default kalkulator;
