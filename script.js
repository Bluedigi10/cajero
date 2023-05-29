var cuentas;

//Lectura de json
const request = new XMLHttpRequest();
request.open('GET', './datos/cuentas.json', true);
request.send();
request.onreadystatechange = function(){
    if(this.readyState==4 && this.status ==200){
        cuentas = JSON.parse(this.responseText);
        console.log(cuentas);
    }
}

var nombre1="a";
var contra1="0";
var saldo1=0;

crear=document.getElementById("create");
entrar=document.getElementById("entrar");
chequeo=document.getElementById("Consultar");
retiro=document.getElementById("Retirar");
depositos=document.getElementById("Depositar");
salirse=document.getElementById("logout");

crear.addEventListener("click",nuevacuenta);
entrar.addEventListener("click",iniciar);
chequeo.addEventListener("click",consulta);
retiro.addEventListener("click",retirar);
depositos.addEventListener("click",depositar);
salirse.addEventListener("click",salir);



function nuevacuenta(){
    console.log(cuentas);
}

function iniciar(){
    var nombre = document.getElementById("nombre").value;
    var contra = document.getElementById("contra").value;
    for(let i=0;i<cuentas.length;i++){
        if (cuentas[i].nombre==nombre){
            nombre1=cuentas[i].nombre;
            contra1=cuentas[i].password;
            saldo1=cuentas[i].saldo;
            if(contra1==contra){
                alert("Bienvenido "+nombre1);
                var oculto = document.getElementById("Login");
                var mostrar = document.getElementById("Pantalla");
                oculto.style.display = "none";
                mostrar.style.display = "flex";
                document.getElementById("nUsuario").innerHTML=(nombre1);
            }
            else{
                alert("Contraseña Incorrecta");
            }
            break;
        }
    }
}
function consulta(){
    document.getElementById("estatus").innerHTML=("Tu saldo es "+saldo1);
}
function retirar(){
    var saldot= saldo1;
    saldor = document.getElementById("dinerouser").value;
    saldot = saldot -saldor;
    if(saldot<10){
        return alert("Su saldo es menor a 10, retire menos");
    }
    document.getElementById("estatus").innerHTML=("Retiraste "+saldor);
    saldo1 = saldot;
}
function depositar(){
    var saldott= saldo1;
    saldod = document.getElementById("dinerouser").value;
    saldott = parseInt(saldott) + parseInt(saldod);
    if(saldott>990){
        return alert("Su saldo es mayor a 990, deposite menos");
    }
    document.getElementById("estatus").innerHTML=("Depositaste "+saldod);
    saldo1 = saldott;
}
function salir(){
    var oculto = document.getElementById("Login");
    var mostrar = document.getElementById("Pantalla");
    mostrar.style.display = "none";
    oculto.style.display = "flex";
}