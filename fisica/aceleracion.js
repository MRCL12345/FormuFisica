function abasica() {
  let velocidad = parseFloat(prompt("Introduzca su velocidad"));
  let tiempo = parseFloat(prompt("Introduzca el tiempo empleado"));
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
  `
  );
}

function aif() {
  let vi = parseFloat(prompt("Ingresa tu velocidad inicial"));
  let vf = parseFloat(prompt("Ingresa velocidad final"));
  let tiempo = parseFloat(prompt("Ingresa el tiempo"));
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
    a = ${r}m/s²`
  );
}
