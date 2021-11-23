function emecbasica() {
  let Ec = parseFloat(prompt("Ingresa la Energía Cinética"));
  let Ep = parseFloat(prompt("Intresa la Energía Mecánica"));
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
