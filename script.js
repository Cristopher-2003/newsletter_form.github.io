const inputEmail = document.querySelector("[type=email]");
const botonEnviar = document.querySelector(".btn-cta");
const lblError = document.querySelector(".error");

const newsletter = document.querySelector(".newsletter");
const newsletterAprobado = document.querySelector(".newsletter-aprobado");


const exitoTxt = document.querySelector("#exito");


botonEnviar.addEventListener("click", ejecutar);

function ejecutar() {
    if (inputEmail.value === "") {
        lblError.style.opacity = "1";
        inputEmail.style.backgroundColor = "rgb(228, 170, 170)";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";
    } 
    else if (!validarCorreos(inputEmail.value)) { // Pasamos el valor del input, no el objeto
        lblError.style.opacity = "1";
        inputEmail.style.backgroundColor = "rgb(228, 170, 170)";
        inputEmail.style.borderColor = "hsl(4, 100%, 67%)";

        setTimeout(function(){
            inputEmail.value = "";
        }, 2000);
    } 
    else {
        // Si el correo es válido
        lblError.style.opacity = "0";
        inputEmail.style.backgroundColor = "";
        inputEmail.style.borderColor = "";
        inputEmail.style.color = ""; // Restaurar color del texto
        newsletterAprobado.style.display = "flex";
        newsletter.style.display = "none";
        exitoTxt.innerText = `${inputEmail.value}`; //mostramos el correo que ingreso el usuario 

    }
}

function validarCorreos(email) {
    // Esta es una expresión regular para validar correos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // Ahora probamos el valor del correo, no el elemento
}




 
