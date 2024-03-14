const campo_texto = document.querySelector(".textboxx");
const campo_mensaje = document.querySelector("#text2");

const matriz_code = [
    ["e", "enter"], // índice 0
    ["i", "imes"], // índice 1
    ["a", "ai"], // Índice 2
    ["o", "ober"], // índice 3
    ["u", "ufat"], // índice 4
];

document.getElementById("btnEncriptar").addEventListener("click", btnEncriptar);
document.getElementById("btnDesencriptar").addEventListener("click", btnDesencriptar);
document.getElementById("btnCopy").addEventListener("click", btnCopy);

function btnEncriptar() {
    const texto = campo_texto.value;
    //console.log(texto);

    const mensajeEncriptado = encriptar(texto);
    campo_mensaje.textContent = mensajeEncriptado;
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1]);
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = campo_mensaje.textContent;
    const mensajeDesencriptado = desencriptar(textoEncriptado);
    campo_texto.value = mensajeDesencriptado;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseDesencriptada.includes(matriz_code[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(matriz_code[i][1], matriz_code[i][0]);
        }
    }
    return fraseDesencriptada;
}

function btnCopy() {
    const textoCopiar = document.getElementById("text2");
    textoCopiar.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}