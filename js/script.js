const inputNumero = document.getElementById("numero");
const btnGerar = document.getElementById("gerar");
const resultadoDiv = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");

btnGerar.addEventListener("click", function () {
    let number = parseInt(inputNumero.value);

    resultadoDiv.innerHTML = "";
    mensagem.textContent = "";

    if (isNaN(number) || number < 1 || number > 10) {
        mensagem.textContent = "⚠️ Por favor, insira um número válido entre 1 e 10.";
        mensagem.style.color = "red";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        let resultado = number * i;
        resultadoDiv.innerHTML += `${number} x ${i} = ${resultado} <br>`;
    }

    inputNumero.value = ""; 
});


