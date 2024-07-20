var valor = document.querySelector(".paragraph-style");

function criptografar(){
    var texto = valor.value;

    var resultCript = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "obes")
                            .replace(/u/g, "ufat");
    console.log(resultCript);

    document.querySelector(".main__resposta__imagem").classList.add("hidden");
    var paragrafo = document.querySelector(".main__resposta__texto");

    paragrafo.innerHTML = '<p class="main__reposta__paragrafo">' + resultCript + '</p>' + '<button class="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar(){
    var texto = valor.value

    var resultCript = texto.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/obes/g, "o")
                            .replace(/ufat/g, "u");
    console.log(resultCript);

    document.querySelector(".main__resposta__texto").innerHTML = '<p class="main__reposta__paragrafo">' + resultCript + '</p>' + '<button class="copiar" onclick="copiar()">Copiar</button>';
}

function copiar(){
    var textoCop = document.querySelector(".main__reposta__paragrafo").innerText;
    navigator.clipboard.writeText(textoCop);
}