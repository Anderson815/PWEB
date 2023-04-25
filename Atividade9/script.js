var listNumeros = new Array();

for (i = 0; i < 3; i++) {
  listNumeros[i] = parseInt(prompt("Informe os 3 números:"));
}

function maior(listNumeros) {
  let arrayNumeros; 
  arrayNumeros = listNumeros;

  return Math.max.apply(null, arrayNumeros);
}

function crescente(listNumeros) {
  let arrayNumeros;
  arrayNumeros = listNumeros;

  arrayNumeros.sort(function (x, y) {
    return x - y;
  });
  return arrayNumeros;
}

window.alert(`O maior numero eh: ` + maior(listNumeros));
window.alert(`Em ordem: `+ crescente(listNumeros));