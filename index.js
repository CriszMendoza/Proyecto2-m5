let cuentas = [
  { 
    nombre: "Hiromi", 
    saldo: 200, 
    password: "123" 
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

let usuario;
let $btnRegistro = document.getElementById("btn-enviar")
let $consultarSaldo = document.getElementById("consultarSaldo")
let $btnAgregarSaldo = document.getElementById("ingresar-monto")
$btnRegistro.addEventListener("click", getDatos)
$btnRegistro.addEventListener("click", sesionIniciada)
$consultarSaldo.addEventListener("click",consultarSaldo)
$btnAgregarSaldo.addEventListener("click",ingresarMonto)

function getDatos(){
  let user = document.getElementById("user").value,
      password = document.getElementById("password").value,
      $form = document.getElementById("form-alert")
  if (user === "" || password === "") {
    return false
  } else{
    for (let i = 0; i < cuentas.length; i++) {
      if (user === cuentas[i].nombre && password === cuentas[i].password){
    
        return incrustraHTML(cuentas[i].nombre)
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
  <div class="container text-light pt-5 pb-5" id="main-modal">
      <div>
        <h2 id="benvenida">Hola ${nombre} Bienvenid@!</h2>
      </div>
      <div>
        <h4 class="mb-4">¿Que deseas hacer hoy?</h4>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#consulta-saldo">Consultar saldo</button>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#agregar-saldo">Ingresar monto</button>
        <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#retirar-saldo" >Retirar monto</button>
      </div>
    </div>
  `
}

function sesionIniciada (){
  let user = document.getElementById("user").value,
      password = document.getElementById("password").value
  for (let i = 0; i < cuentas.length; i++) {
    if (user === cuentas[i]["nombre"] && password === cuentas[i]["password"]) {
      usuario = cuentas[i] 
    }
  }
}

function consultarSaldo(){
  let $modalSaldo = document.getElementById("modal-saldo")
  $modalSaldo.textContent =`Tu saldo disponible es de: $${usuario.saldo}.00`
}

function ingresarMonto(){
  let $montoAgregado = parseInt(document.getElementById("agregarSaldo").value)
  let $saldoActualizado = document.getElementById("saldo-actualizado")
  if (usuario.saldo + $montoAgregado < 10 || usuario.saldo + $montoAgregado < 998) {
    usuario.saldo += $montoAgregado
    $saldoActualizado.outerHTML =
    `
    <div class="alert alert-success" role="alert" id="saldo-actualizado">
      Tu nuevo saldo es de $${usuario.saldo}.00
    </div>`
  }else{
    $saldoActualizado.outerHTML = `
    <div class="alert alert-danger" role="alert" id="saldo-actualizado">
      El saldo de tu cuenta no puede ser menor de $10.00 ni mayor a $999.00
    </div>`
  }
}

function retirarMonto() {



}