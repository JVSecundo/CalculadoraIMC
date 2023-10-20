function calcularIMC() {
            const peso = parseFloat(document.getElementById("peso").value);
            const altura = parseFloat(document.getElementById("altura").value);

            const resultadoIMC = document.getElementById("resultadoIMC");

            if (isNaN(peso) || isNaN(altura) || altura <= 0) {
                alert("Por favor, informe valores válidos para peso e altura.");
            } else {
                const imc = peso / (altura * altura);
                resultadoIMC.textContent = "Seu IMC é: " + imc.toFixed(2);

                if (imc < 18.5) {
                    resultadoIMC.textContent += " (Abaixo do peso)";
                } else if (imc < 24.9) {
                    resultadoIMC.textContent += " (Peso normal)";
                } else if (imc < 29.9) {
                    resultadoIMC.textContent += " (Sobrepeso)";
                } else if (imc < 34.9) {
                    resultadoIMC.textContent += " (Obesidade grau I)";
                } else if (imc < 39.9) {
                    resultadoIMC.textContent += " (Obesidade grau II)";
                } else {
                    resultadoIMC.textContent += " (Obesidade grau III)";
                }
            }
        }
function limparCampos() {
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("resultadoIMC").textContent = "";
    }