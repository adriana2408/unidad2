function mostrarMensaje() {
  for (let i = 1; i <= 10; i++) {
    //console. log(i);
    alert(i);
  }
}

//Ejemplo 2
let texto = "";

//Obtener el conteo como texto HTML
for (let i = 1; i <= 10; i++) {
  texto += `${i}<br />`;
}

//Asignamos al elemento
document.getElementById('demo').innerHTML = texto;

//Ejemplo 3
texto = "";
const autos = ["BMW", "Volvo", "Saab", "Ford", "Audi"
];

for (let i = 0; i < autos.length; i++) {
  texto += `${autos[i]}<br />`;
}

document.getElementById('autos').innerHTML = texto;

//Ejemplo 4
//Siempre limpiar la variable de texto
texto = "";

//Recorrer una lista por ejemplo
for (let auto of autos) {
  texto += `${auto}<br />`;
}

//Asignar elemento
document.getElementById('autos2').innerHTML = texto;
