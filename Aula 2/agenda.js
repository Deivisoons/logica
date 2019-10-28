//Vetor
var contatos = [];

//Cadastrar
function cadastrar(){
    
    //Obter os campos digitados
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var email = document.getElementById("email");

    //Vetor de linha
    var linha = [nome.value, idade.value, email.value];

    //Cadastrar no vetor
    contatos.push(linha);

    //Limpar campos
    nome.value = "";
    idade.value = "";
    email.value = "";

    //Cursor no campo nome
    nome.focus();

    //Exibir vetor
    console.log(contatos);    
}