let saldo = parseInt(prompt("Informe saldo inicial"));
document.write("Saldo inicial:" + saldo + "<br>");
encerrar = "n";
while (encerrar == "n") {
    tipo = parseInt( prompt("Informe tipo de entrada"));
    quantidade = parseInt(prompt("Informe quantidade"));

    if (tipo == 1) {
        saldo = saldo + quantidade;
        document.write("Entrada:" + quantidade + "<br>");
    }
    if (tipo == 2) {
        if (saldo >= quantidade) {
            saldo = saldo - quantidade;
            document.write("Saída:" + quantidade + "<br>");
        } else {
            document.write("Saldo insuficiente" + "<br>");
            alert("Saldo insuficiente");
        }
    }
    document.write("Saldo:" + saldo + "<br>");
    encerrar = prompt("Deseja encerrar ? (s/n)");
}
document.write("Sistema encerrado" + "<br>");
