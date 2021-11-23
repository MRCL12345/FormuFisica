function fbasica() {
  let masa = parseFloat(prompt("Introduzca su masa"));
  let aceleracion = parseFloat(prompt("Introduzca su aceleración"));
  let r = masa * aceleracion;
  swal(
    `
  Fuerza`,
    `Formula:
  F = m·a
  -----
  Recursos:
  m = ${masa}kg
  a = ${aceleracion}m/s²
  -----
  Resultado:
  F = ${r}N
  `
  );
}
