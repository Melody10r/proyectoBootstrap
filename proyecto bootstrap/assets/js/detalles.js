function enviarFormulario(){

let formulario = document.querySelector("form");
    formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("validationServer01").value;
    let email = document.getElementById("validationServer02").value;

    if (nombre === "" || email === "") {
    alert("Por favor, completa todos los campos.");
    return;
    }

    if (confirm("¿Enviar formulario?")) {
    alert("Formulario enviado correctamente.");
    formulario.submit();
    }
}); 
}
