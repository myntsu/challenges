let arreglo = new Set("Arreglo de string");
console.log(arreglo);
arreglo.delete(" ");
arreglo.delete("d");
arreglo.delete("s");
arreglo.delete("t");
arreglo.delete("i");
arreglo.delete("n");
console.log(arreglo);

let persona = { nombre: 'Marcelo Salas', edad: 11, saludar: () => { return "Buena matador!"; } };

let perros = [
    { raza: 'Pastor Alemán', origen: 'Alemania', pelaje: 'Lanudo', peso: '33kg', edad: 12 }, 
    { raza: 'Poodle', origen: 'Francia', pelaje: 'Lanudo', peso: '20kg', edad: 14 }, 
];

var texto = "<tr> <th>Raza</th> <th>Origen</th> <th>Pelaje</th> <th>Peso</th>  <th>Edad</th> </tr>";

for(var i = 0; i < perros.length; i++) {
  texto += `
    <tr>
      <td>${perros[i].raza}</td>
      <td>${perros[i].origen}</td>
      <td>${perros[i].pelaje}</td>
      <td>${perros[i].peso}</td>
      <td>${perros[i].edad}</td>
    </tr>
  `;
}

document.getElementById("cuerpo-tabla").innerHTML = texto;

let edades = [49, 51, 21, 18, 15];
for(let edad of edades){
    console.log(edad);
}

for(let otro in edades){
    console.log(otro);
}

var datosPersonales = ['juan','duran', {edad:34,nacimiento:1985}, false]; 
console.log(datosPersonales);

let programa_web = ["JavaScript", "React", "Vue JS", "Angular", { backend: "Node JS" }];
console.log(programa_web[4]);

let instrumentos = ["Piano","Ukelele","Chelo","Guitarra","Oboe"];
console.log(instrumentos);
instrumentos.length = 2;
console.log(instrumentos);
instrumentos[5] = "Flauta";
instrumentos[7] = "Acordeón";
console.log(instrumentos);
console.log(instrumentos.length);

let peliculas = ["El Aro", "El Resplandor", "Evil Dead", "Toy Story4", "El diablo viste a la moda"];
console.log(peliculas);

let peliculasInfantiles = new Array("Froezen", "UP", "Bichos");
console.log(peliculasInfantiles);

let peliculasRomanticas = Array ("Titanic", "Pd Te Amo", "The Notebook");
console.log(peliculasRomanticas);