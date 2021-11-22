function tmecbasica() {
  let fuerza = parseInt(prompt("Ingrese la fuerza"));
  let distancia = parseInt(prompt("Ingrese la distancia"));
  let r = fuerza * distancia;
  swal(
    `TRABAJO MECÁNICO`,
    `Formula:
    Tmec. = F·d
    -----
    Recursos: 
    F = ${fuerza}
    d = ${distancia}
    -----
    Resultado:
    Tmec. = ${r}J`
  );
}
