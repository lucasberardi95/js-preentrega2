let nombre = prompt("Ingrese su nombre: (Para salir ingrese: salir");

while(nombre!= "salir"){
    console.log(nombre);
    nombre = prompt("Ingrese su nombre: (Para salir ingrese: salir");
}

class Curso {
    constructor(nombre, duracion, precio) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }
}

const Electricidad = new Curso("Electricidad", "12 meses", 60000);
const AireAcondicionado = new Curso("A/A", "4 meses", 24000);
const Mecanica = new Curso("Mecanica", "6 meses", 36000);
const Plomeria = new Curso("Plomeria", "5 meses", 30000);

const arrayCursos = [Electricidad, AireAcondicionado, Mecanica, Plomeria];

//Función con el menú de opciones. 

function menu() {
    alert("Bienvenido a Escuelas Pepito");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Inscripcion \n 2) Baja de Curso \n 3) Salir"));
    return opcion;
}

//Función para inscripcion de un alumno: 

function Inscripcion() {
    let nombre = prompt("Ingresar nombre:");
    let apellido = prompt("Ingrese apellido:");
    let telefono = parseInt(prompt("Ingresar numero de contacto:"));
    while(isNaN(telefono)){
        telefono = parseInt(prompt("Numero de telefono no valido, volver a ingresar por favor: "));
    } 
    let cursoElegido = prompt("Ingresar curso al cual te queres incribir: \n 1) Electricidad \n 2) Aire Acondicionado \n 3) Mecanica \n 4) Plomeria ");
    let diasElegidos = prompt("Que dias quisieras cursar? Ingresar la opcion unicamente con el numero: \n 1) Lunes y miercoles \n 2) Martes y jueves")
    let horarioElegido = prompt("Que horario quisieras cursar? Ingresar la opcion unicamente con el numero: \n 1) 10 a 12hs \n 2) 19 a 21hs")
    console.log(nombre, apellido, telefono, cursoElegido, diasElegidos, horarioElegido)
    alert("Muchas gracias " + nombre + " ya estas inscripto, nos pondremos en contacto a la brevedad con vos al " + telefono + " Mucha suerte en tu cursada!")
}


//Función para dar de baja a un alumno: 

function bajaAlumno() {
    let dni = parseInt(prompt("Ingrese su DNI: "));
    let alumno = arrayAlumnos.find( alumno => alumno.dni === dni);
    let indice = arrayClientes.indexOf(alumno);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}

//Función para salir del programa: 

function salir() {
    alert("Gracias por utilizar el banco Coderjaus");
}
let opcion = menu(); 

switch(opcion) {
    case 1: 
        Inscripcion();
        break;
    case 2: 
        bajaCliente();
        break;
    case 3: 
        salir();
        break;
    default: 
        alert("Opcion invalida")
        break;
}