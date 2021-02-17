let usuario;
let $btnRegistro = document.getElementById("btn-enviar")
let $consultarSaldo = document.getElementById("consultarSaldo")
let $btnAgregarSaldo = document.getElementById("ingresar-monto")
let $btnRetirarSaldo = document.getElementById("retirar-monto")
$btnRegistro.addEventListener("click", getDatos)
$btnRegistro.addEventListener("click", sesionIniciada)
$consultarSaldo.addEventListener("click",consultarSaldo)
$btnAgregarSaldo.addEventListener("click",ingresarMonto)
$btnRetirarSaldo.addEventListener("click",retirarMonto)

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
        <div class="alert alert-danger" role="alert" id="form-alert">
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
  $modalSaldo.outerHTML = `
  <div class="alert alert-success" role="alert" id="modal-saldo">
      Tu saldo es de <b>$${usuario.saldo}.00</b>
  </div>
  `
}

function ingresarMonto(){
  let $montoAgregado = parseInt(document.getElementById("agregarSaldo").value)
  let $saldoActualizado = document.getElementById("saldo-actualizado")
  if (usuario.saldo + $montoAgregado < 10 || usuario.saldo + $montoAgregado > 998) {
    $saldoActualizado.outerHTML = `
    <div class="alert alert-danger" role="alert" id="saldo-actualizado">
      El saldo de tu cuenta no puede ser menor de <b>$10.00</b> ni mayor a <b>$999.00</b>
    </div>`
  } else if(Math.sign($montoAgregado) === -1 || $montoAgregado === 0 || isNaN($montoAgregado)){
    $saldoActualizado.outerHTML = `
    <div class="alert alert-danger" role="alert" id="saldo-actualizado">
      No puedes ingresar números negativos o dejar el campo vacío
    </div>`
  } else{
    usuario.saldo += $montoAgregado
    $saldoActualizado.outerHTML =
    `
    <div class="alert alert-success" role="alert" id="saldo-actualizado">
      Tu nuevo saldo es de <b>$${usuario.saldo}.00</b>
    </div>`
  }
}

function retirarMonto() {
  let $montoRetirado = parseInt(document.getElementById("retirarSaldo").value)
  let $saldoActualizado = document.getElementById("saldo-retiro")
  if (usuario.saldo - $montoRetirado < 10 || usuario.saldo - $montoRetirado > 998) {
    $saldoActualizado.outerHTML = `
    <div class="alert alert-danger" role="alert" id="saldo-retiro">
      El saldo de tu cuenta no puede ser menor de <b>$10.00</b> ni mayor a <b>$999.00</b>
    </div>`
  } else if(Math.sign($montoRetirado) === -1 || $montoRetirado === 0 || isNaN($montoRetirado)){
    $saldoActualizado.outerHTML = `
    <div class="alert alert-danger" role="alert" id="saldo-retiro">
      No puedes ingresar números negativos o dejar el campo vacío
    </div>`
  } else{
    usuario.saldo -= $montoRetirado
    $saldoActualizado.outerHTML =
    `
    <div class="alert alert-success" role="alert" id="saldo-retiro">
      Tu nuevo saldo es de <b>$${usuario.saldo}.00</b>
    </div>`
  }
}