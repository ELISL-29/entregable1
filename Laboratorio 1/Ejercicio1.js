// Nombre estudiante: Carlos Daniel Rosales
// Grupo: 5 / Jornada tarde
// Curso: Programación
// Código Fuente: autoría propia 

console.log("Hola Mundo");
//DECLARACION DE VARIABLES
var nombre= "Juan"//string
let apellido= "perez" // string
let edad=24//numero
let esEstudiante= true
console.log (nombre,apellido)
console.log ("Nombre",nombre, apellido)
console.log ("Edad", edad)
console.log ("esEstudiante?", esEstudiante) 

//EJERCICIO 2-OPERACIONES MATEMATICAS
let a=7
let b=50
let suma=a+b
let resta=a-b
let multiplicacion=a*b
let division=a/b

console.log ("Suma", suma)
console.log ("Resta", resta)
console.log ("Multiplicacion", multiplicacion)
console.log ("Division", division)

//EJERCICIO 3-OPERADORES DE COMPARACION 
let x=7
let=y=10
console.log ("x es igual a y",x==y) //exactamente igual
console.log ("x es diferente de y", x!=y) //diferente de
console.log ("x es mayor que y", x>y) //mayor que
console.log ("x es mayor o igual que y:" ,x>=y) //mayor o igual que
console.log ("y es mayor que x" , y>x) //mayor que 

//EJERCICIO 4-OPERADORES LOGICOS
let esAdulto=true
let tienePermiso=false
let puedeEntrar=esAdulto && tienePermiso
let puedeSalir=esAdulto || tienePermiso

console.log("¿Puede entrar?", puedeEntrar)
console.log("¿Puede salir?", puedeSalir)

//EJERCICIO 5-CONCATENANCION DE STRING
let nombre2= "Maria"
let apellido3= "Lopez"
let saludo= "Hola, "+nombre2+" "+apellido3+ " Welcome"
console.log (saludo)

console.log ("Hola,", nombre2,apellido3, "Welcome")

let saludoConTemplate=`Hola, ${nombre2} ${apellido3}!`
console.log (saludoConTemplate)
