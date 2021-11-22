function abasica() {
  let velocidad = parseInt(prompt("Introduzca su velocidad"));
  let tiempo = parseInt(prompt("Introduzca el tiempo empleado"));
  let r = velocidad / tiempo;
  swal(
    `
  ACELERACIÓN`,
    `Formula:
    a = v/t
    ------
    Recursos:
    v = ${velocidad}m/s
    t =  ${tiempo}s
    ------
    Resultado:
    a = ${r}m/s²
  `,
    `success`
  );
}
function aif() {
  let vi = parseInt(prompt("Ingresa tu velocidad inicial"));
  let vf = parseInt(prompt("Ingresa velocidad final"));
  let tiempo = parseInt(prompt("Ingresa el tiempo"));
  let r = (vf - vi) / tiempo;
  swal(
    `ACELERACIÓN Vi-Vf`,
    `Formula:
    a = Vf - Vi/t 
    -----
    Recursos:
    Vi = ${vi}m/s
    Vf = ${vf}m/s
    t = ${tiempo}s
    -----
    Resultado:
    a = ${r}m/s²`,
    `success`
  );
}
