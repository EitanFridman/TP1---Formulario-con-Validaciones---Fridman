let valido1 = false;
let valido2 = false;
let valido3 = false;
let valido4 = false;

Validar = (id, label) => {
    let labelaux = document.getElementById(label)
    let idaux = document.getElementById(id)

    if (idaux.value.length >= 3) {
        labelaux.innerText = "";
        valido1 = true;
    } else {
        labelaux.innerText = "Escribe bien, por favor.";
        valido1 = false;
    }
}


let mail = document.getElementById('mail');
let mailLabel = document.getElementById('maillabel');

mail.addEventListener("input", () => {
    let mailValue = mail.value;
    let mailReglas = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (mailReglas.test(mailValue)) {
        mailLabel.innerText = "";
        valido2 = true;
    } else {
        mailLabel.innerText = "Por favor, ingresa un mail válido";
        valido2 = false;
    }
});



ContraseñaBien = (id, label) => {
    let labelaux = document.getElementById(label);
    let idaux = document.getElementById(id).value;
    const reglaNumero = /\d/;
    const reglaLetra = /[a-zA-Z]/;

    if (reglaNumero.test(idaux) && idaux.length >= 8 && reglaLetra.test(idaux)) {
        labelaux.innerText = "";
        valido3 = true;
    } else {
        labelaux.innerText = "La contraseña debe tener al menos una letra, un número y 8 caracteres";
        valido3 = false;
    }
}


ValidarContraseña = (id, label, idb) => {
    let labelaux = document.getElementById(label);

    let idaux = document.getElementById(id).value;
    let idauxb = document.getElementById(idb).value;

    if (idaux === idauxb) {
        labelaux.innerText = "";
        valido4 = true;
    } else {
        labelaux.innerText = "Las contraseñas deben ser iguales";
        valido4 = false;
    }
}


function enviar(boton) {
    console.log(valido1);
    console.log(valido2);
    console.log(valido3);
    console.log(valido4);
    
    let botonEnviar = document.getElementById(boton);

    botonEnviar.disabled = false;

    if (valido1 && valido2 && valido3 && valido4) {

        botonEnviar.disabled = false;
        alert("¡Formulario enviado correctamente!");
    } else {

        botonEnviar.disabled = true;
        alert("Por favor, corrija los errores en los campos.");
    }
}










