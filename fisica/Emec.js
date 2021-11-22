function emecbasica() {
  let Ec = parseInt(prompt("Ingresa la Energía Cinética"));
  let Ep = parseInt(prompt("Intresa la Energía Mecánica"));
  let r = parseInt(Ec) + parseInt(Ep);
  swal(
    `ENERGIA MECÁNICA`,
    `Formula:
    Emec. = Ec + Ep
    -----
    Recursos:
    Ec = ${Ec}
    Ep = ${Ep}
    -----
    Resultado:
    Emec. = ${r}J`
  );
}
