//Vetor
var produtos =[];

//Comprar
function comprar (){

    //Obter os campos digitados
    var codigo = document.getElementById("codigo");
    var quantidade = document.getElementById("quantidade");
    var cupom = document.getElementById("cupom");
    var email = document.getElementById("email");

    //Vetor de linha
    var linha = [codigo.value, quantidade.value, cupom.value, email.value];

    //cadastrar no vertor
    contatos.push(linha);

    //Limpar campos
    codigo.value = "";
    quantidade.value = "";
    cupom.value = "";
    email.value = "";

    //Cursor no campo do codigo
    codigo.focus();

    //Exibir vetor
    console.log(contatos);
}