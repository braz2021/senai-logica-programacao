let listaDeEstudantes = ["Helena","chico","mario", "jose","maria"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if(quantidadeDeEstudantes < 5){
    listaDeEstudantes.push("joao");
    console.log(listaDeEstudantes);
}else{
    console.log("nao e possivel inserir mais alunos nessa turma ")
}