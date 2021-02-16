let cuentas = [
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

function getDatos(){
  let user = document.getElementById("user").value,
      password = document.getElementById("password").value,
      $form = document.getElementById("form-alert")

  if (user === "" || password === "") {
    return false
  } else{
    for (let i = 0; i < cuentas.length; i++) {
      if (user === cuentas[i].nombre && password === cuentas[i].password){
    
        return incrustraHTML(cuentas[i].nombre,cuentas[i].saldo)
      }else {
        return $form.outerHTML = `
        <div class="alert alert-danger" role="alert">
          La contraseña que ingresaste es incorrecta
        </div>
        `
      }
    }  
  }
}

function incrustraHTML (nombre) {
  $('#modal-registro').modal('hide')
  $fragment = document.createDocumentFragment()
  $main = document.getElementById("incrustar"),
  $main.outerHTML=`
  <div class="container text-light pt-5 pb-5">
      <div>
        <h2 id="benvenida">Hola ${nombre} Bienvenid@!</h2>
      </div>
      <div>
        <h4 class="mb-4">¿Que deseas hacer hoy?</h4>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#consulta-saldo">Consultar saldo</button>
        <button type="button" class="btn btn-secondary" onclick="ingresarMonto()">Ingresar monto</button>
        <button type="button" class="btn btn-secondary" onclick="retirarMonto()" >Retirar monto</button>
      </div>
    </div>
  `
}

let usuario;

function sesionIniciada (){
  let user = document.getElementById("user").value,
      password = document.getElementById("password").value
  for (let i = 0; i < cuentas.length; i++) {
    if (user === cuentas[i].nombre && password === cuentas[i].password) {
      usuario = cuentas[i] 
    }
  }
}

function consultarSaldo(){
  let $modalSaldo = document.getElementById("modal-saldo")
  $modalSaldo.textContent =`Tu saldo disponible es de: $${usuario.saldo}.00`
}

let $btnRegistro = document.getElementById("btn-enviar")
$btnRegistro.addEventListener("click", getDatos)
$btnRegistro.addEventListener("click", sesionIniciada)
let $consultarSaldo = document.getElementById("consultarSaldo")
$consultarSaldo.addEventListener("click",consultarSaldo)