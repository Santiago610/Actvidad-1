
const empleados = [
    { nombre: "Carlos", edad: 25, salario: 2500000, area: "Desarrollo" },
    { nombre: "Ana", edad: 30, salario: 3500000, area: "Diseño" },
    { nombre: "Pedro", edad: 28, salario: 3000000, area: "Desarrollo" },
    { nombre: "Laura", edad: 35, salario: 4500000, area: "Gerencia" },
    { nombre: "Juan", edad: 22, salario: 2000000, area: "Soporte" }
];

function mostrarEmpleados() {
    empleados.forEach((empleado)=> {
        console.log(empleado.nombre, empleado.edad, empleado.salario, empleado.area
        )
        
        
    });
}

mostrarEmpleados();




function buscarEmpleado(nombre) {
    return empleados.find (empleado => empleado.nombre === nombre );


}
   console.log (buscarEmpleado("Pedro"));





  function obtenerDesarrolladores(area){
    return empleados.filter (empleado => empleado.area === area );
  }

  console.log (obtenerDesarrolladores("Desarrollo"));

  



  function calcularnomina(){
let suma  = empleados.reduce((acumulador,empleado)=>{
return acumulador+empleado.salario;
},0)
return suma
}

console.log(calcularnomina());








    
