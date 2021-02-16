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
    nombre: document.getElementById("nombre").name,
    contraseña: document.getElementById("contraseña").name,
    monto: document.getElementById("monto").name
  }
  cuentas.push(usuario)
}

console.log(cuentas);
$btnRegistro.addEventListener("click", getData)

