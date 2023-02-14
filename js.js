// Função para o button

function guardaFormulario() {

    var formsCliente = new Object();

    formsCliente.nome = document.getElementById('nome').value; 
    formsCliente.sobrenome = document.getElementById('sobrenome').value; 
    formsCliente.nascimento = document.getElementById('nascimento').value; 
    formsCliente.email = document.getElementById('email').value; 
    formsCliente.telefone = document.getElementById("telefone").value; 
    formsCliente.cpf = document.getElementById("cpf").value; 
    formsCliente.endereco = document.getElementById("endereco").value; 
    formsCliente.bairro = document.getElementById("bairro").value; 
    formsCliente.cidade = document.getElementById("cidade").value; 

// Converter para String JSOn
var jsonform = JSON.stringify(formsCliente);


console.log(formsCliente.valueOf());

    document.getElementById("nome1").innerHTML = `Nome: ` + formsCliente.nome;
    document.getElementById("sobrenome1").innerHTML = `Sobrenome: ` + formsCliente.sobrenome;
   document.getElementById("nascimento1").innerHTML = `Nascimento: ` + formsCliente.nascimento;
    document.getElementById("email1").innerHTML = `E-mail: ` + formsCliente.email;
    document.getElementById("telefone1").innerHTML = `Telefone: ` + formsCliente.telefone;
    document.getElementById("cpf1").innerHTML = `CPF: ` + formsCliente.cpf;
    document.getElementById("endereco1").innerHTML = `Endereço: ` + formsCliente.endereco;
    document.getElementById("bairro1").innerHTML = `Bairro: ` + formsCliente.bairro;
    document.getElementById("cidade1").innerHTML = `Cidade: ` + formsCliente.cidade;

}

const btn_imp=document.getElementById("btn_imp")

btn_imp.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById('imprimir').innerHTML;
    let estilo ="<Style>";
    estilo += "form { align-items: center}";
    estilo += "</Style>";

    const win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<legend>Formulario</legend><br>');
    win.document.write(estilo);
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(conteudo);
    win.document.write('</body></html>');
    win.print()

})
    

