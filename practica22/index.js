let alumnos = ["René", "Salomon", "Miguel", "Johan", "Augusto"];
console.log("Lista de alumnos:", alumnos);
console.log("Número de alumnos:", alumnos.length);
alumnos.push("Mia");
console.log("Lista actualizada de alumnos:", alumnos);
alumnos[2]= "Angel";
console.log("Lista final de alumnos:", alumnos);
console.log(alumnos[2]);
console.log(alumnos[8]);
console.log(alumnos[-3]);
alumnos[10]= "Sofia";
console.log("Lista con indice 10 asignado:", alumnos);
console.log(alunos[8]);
alumnos.pop(); //elimina el ultimo elemento
console.log("Lista despues de pop:", alumnos);
alumnos.shift(); //elimina el primer elemento
console.log(alumnos);

for (let i = 0; i < alumnos.length; i++) {
    console.log(`Alumno de indice ${i}: ${alumnos[i]}`);
}

let numero = [1,2,3,4,5,6,7,8,9,10];
console.log(numero[5]);

alumnos.join(",* ");
console.log(alumnos);

let listaAlumnos = document.getElementById("lista-alumnos");
listaAlumnos.innerHTML = alumnos.join(", ");

