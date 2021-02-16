var cuentas = [
  { 
    nombre: "Hiromi", 
    saldo: 200, 
    password: "helloworld" 
  },
  { 
    nombre: "Manuel", 
    saldo: 290, 
    password: "l33t" 
  },
  { 
    nombre: "Luis", 
    saldo: 67, 
    password: "123" 
  }
];

const $btnRegistro = document.getElementById("btn-registro")

const getData = () =>{
  let usuario = {
    nombre: document.getElementById("nombre").value,
    contraseña: document.getElementById("contraseña").value,
    monto: document.getElementById("monto").value
  }
  console.log(usuario)
}

console.log("Hola mundo");
$btnRegistro.addEventListener("click", getData)