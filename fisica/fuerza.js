function fbasica() {
  let masa = parseInt(prompt("Introduzca su masa"));
  let aceleracion = parseInt(prompt("Introduzca su aceleración"));
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
