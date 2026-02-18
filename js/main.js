//💰El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo 💵
  b- Retiro 💸
  c- Depósito 💰
  d- Salir ❌
4- Al finalizar mostrar mensaje
*/
let nombreGuardado = "ema"
let pinGuardado = "5701";
let saldo = 200000;
let ingresar = false;



//inicio
let opcion = prompt(
  "Elegí una opción: \n1- Ingresar usuario y contraseña. \n2 - Crear usuario y contraseña."
);
if (opcion == 1) {
  for (let i = 2; i >= 0; i--) {
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    let ingreso = prompt("Ingresa tu clave");
    if ((pinGuardado == ingreso) && (nombreUsuario.toLowerCase() == nombreGuardado)) {
      alert("Bienvenido");
      ingresar = true;
      break;
    } else {
      alert("Error,te quedan " + i + " intentos");
    }

  }

  if (ingresar) {
    let opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
    );
    while (opcion.toLowerCase() != "x") {
      if (opcion == 1) {
        alert("Tu saldo disponible es $" + saldo.toLocaleString("es-AR"));
      }

      if (opcion == 2) {
        let retiro = parseInt(prompt("Ingrese el monto a retirar usted posee $" + saldo.toLocaleString("es-AR")));

        if (retiro > saldo) {
          alert("Esta intentando retirar mas dinero del que tiene,usted posee $" + saldo.toLocaleString("es-AR"))
        } else {
          saldo = saldo - retiro;
          alert("Retiro exitoso,su saldo ahora es $" + saldo.toLocaleString("es-AR"))
        }
      }

      if (opcion == 3) {
        let deposito = parseInt(prompt("Ingrese el monto a depositar,usted posee $" + saldo.toLocaleString("es-AR")))
        saldo = saldo + deposito;
        alert("Deposito exitoso,su nuevo saldo es de $" + saldo.toLocaleString("es-AR"))
      }


      opcion = prompt(
        "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
      );
    }
    alert("Gracias por operar con el Banco Alcancia")
  } else {
    alert("Retuvimos tu tarjeta. Anda a reclamar a montoto");
  }

} else {
  let nombreNuevo = prompt("Ingrese su nombre de usuario nuevo")
  let pinNuevo = prompt("Ingrese su nueva clave")
  alert("Usuario y contraseña guardados correctamente!!!")
  for (let i = 2; i >= 0; i--) {
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    let ingreso = prompt("Ingresa tu clave");
    if ((pinNuevo == ingreso) && (nombreUsuario.toLowerCase() == nombreNuevo)) {
      alert("Bienvenido");
      ingresar = true;
      break;
    } else {
      alert("Error,te quedan " + i + " intentos");
    }

  }

  if (ingresar) {
    let opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
    );
    while (opcion.toLowerCase() != "x") {
      if (opcion == 1) {
        alert("Tu saldo disponible es $" + saldo.toLocaleString("es-AR"));
      }

      if (opcion == 2) {
        let retiro = parseInt(prompt("Ingrese el monto a retirar usted posee $" + saldo.toLocaleString("es-AR")));

        if (retiro > saldo) {
          alert("Esta intentando retirar mas dinero del que tiene,usted posee $" + saldo.toLocaleString("es-AR"))
        } else {
          saldo = saldo - retiro;
          alert("Retiro exitoso,su saldo ahora es $" + saldo.toLocaleString("es-AR"))
        }
      }

      if (opcion == 3) {
        let deposito = parseInt(prompt("Ingrese el monto a depositar,usted posee $" + saldo.toLocaleString("es-AR")))
        saldo = saldo + deposito;
        alert("Deposito exitoso,su nuevo saldo es de $" + saldo.toLocaleString("es-AR"))
      }


      opcion = prompt(
        "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
      );
    }
    alert("Gracias por operar con el Banco Alcancia")
  } else {
    alert("Retuvimos tu tarjeta. Anda a reclamar a montoto");
  }
}