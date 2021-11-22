function vbasica() {
  let distancia = parseInt(prompt("Introduce tu distancia"));
  let tiempo = parseInt(prompt("Introduce el tiempo"));
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
    v = ${r}m/s`,
    `success`
  );
}
