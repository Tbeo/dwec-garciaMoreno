//Boton de saludar
function saludar(){
    console.log("Boton saludar pulsado");
    alert("Saludos, soy Jorge García Moreno");
}

function simularError(){
    console.error("Boton error pulsado");        
}

function funcionNavegador(){
    const infoUserAgent = navigator.userAgent;
    //alert solo acepta una variable que engloba el texto, no puedo darle dos cosas.
    const valorTotal = "¿En qué navegador estoy?: " + navigator.userAgent;
    alert(valorTotal);
    console.log("Tercer boton de navegador pulsado", infoUserAgent);
}