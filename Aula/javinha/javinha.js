function Calcular() {
   
    // Obtém os valores dos campos de entrada
    var nome = document.getElementById("cxnome").value;
    var modelo = parseFloat(document.getElementById("cxmodelo").value);
    var placa = parseFloat(document.getElementById("cxplaca").value);
    var dias = parseFloat(document.getElementById("cxdias").value); // Corrigido aqui
    var valor = parseFloat(document.getElementById("cxvalor").value);

    // Realiza o cálculo
    var calcula =  (dias * valor); // Exemplo de cálculo

    // Exibe o resultado
    document.write("O resultado é: " + calcula);
}
