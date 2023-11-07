// com do:

let listaDeEstudantes=["helena","joao","chico"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
let inicio = 0;

do {
    console.log(listaDeEstudantes[inicio]);
    inicio++;
} while (inicio < quantidadeDeEstudantes);


// com do wille:

while (inicio < quantidadeDeEstudantes){
    console.log(listaDeEstudantes[inicio]);
    inicio++;
}