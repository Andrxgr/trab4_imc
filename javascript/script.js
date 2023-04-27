function calcular() {
    
    var n1 = parseFloat(document.getElementById("peso").value);
    var n2 = parseFloat(document.getElementById("altura").value);
    
    
    if (isNaN(n1,n2) || !n1 || !n2){
        
        alert("Preencha todos os campos corretamente!")
        return false
    }

    var result = document.getElementById("peso");
    
    var imc_resultado = (n1 / n2 ** 2).toFixed(2);

    document.getElementById("res").innerHTML = imc_resultado

    var adulto_marcado = document.getElementById("faixa_etaria").checked
    if (adulto_marcado) {
        adulto(imc_resultado)
    } else {
        idoso(imc_resultado)
    }
    n1 = ""
    n2 = ""
}

function mask(altura) {
    var n2 = document.getElementById("altura");
    if (n2.value.length == 1) {
        n2.value += "."
    }
}
function adulto(imc_resultado) {

    


    if (imc_resultado < 18.5) {
        img = "imgs/peso.png"
    }
    else if (imc_resultado >= 18.6 && imc_resultado <= 24.9) {
        img = "imgs/normal.png"
    }
    else if (imc_resultado >= 25 && imc_resultado <= 29.9) {
        img = "imgs/acimadopeso.png"
    }
    else if (imc_resultado >= 30 && imc_resultado <= 34.9) {
        img = "imgs/obs1.png"
    }
    else if (imc_resultado >= 35) {
        img = "imgs/obs2.png"
    }

    document.getElementById("imc_img").src = img

}

function idoso(imc_resultado) {



    if (imc_resultado < 23) {
        img = "imgs/peso.png"
    }
    else if (imc_resultado >= 23 && imc_resultado < 28) {
        img = "imgs/normal.png"
    }
    else if (imc_resultado >= 28 ) {
        img = "imgs/acimadopeso.png"
    }
    console.log(img)
    document.getElementById("imc_img").src = img

}