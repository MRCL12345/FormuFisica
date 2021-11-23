function vbasica() {
  let distancia = parseFloat(prompt("Introduce tu distancia"));
  let tiempo = parseFloat(prompt("Introduce el tiempo"));
  let r = distancia / tiempo;
  swal(
    `Velocidad`,
    `Formula:
    v = d/t
    -----
    Recursos:
    d = ${distancia}
    t = ${tiempo}
    -----
    Resultado: 
    v = ${r}m/s`
  );
}
