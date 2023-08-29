function Insert(num) {
    document.getElementById('resultado').innerHTML += num;
}

function Clear() {
    document.getElementById('resultado').innerHTML = '';
}

function Delete() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function Calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {

        document.getElementById('resultado').innerHTML = eval(resultado);

    }
    else {
        document.getElementById('resultado').innerHTML = "Insira os dados";
    }
}