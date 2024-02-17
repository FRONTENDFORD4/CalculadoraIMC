//IMC
// 1. Capturar os Valores
// 2. Calcular IMC
// 3. Gerar a classificação do IMC
// 4. Organizar as informações
// 5. Salvar os dados em um lista (array) --> localStorage
// 6. Ler e Listar com os dados(array) --> localStorge
// 7. redenrizr o conteúdo na tela
// 8. botão limpar resgistros --> clear localStorage

 pegarValores() {
    let nome = document getElemntById('nome').valueOf.trim();
    let altura = parseFloat(document.getElemntById ('altura').value);
    let peso = parseFloat(document.getElemntById)('peso').value);


    // variavel do objeto recbendo os dados do front-end
    let dadosUsuario= {
        nomeUsuario: nome;
        alturausuario: altura;
        pesousuario: peso;
    } 
    
    return dadosUsuario;
}

function calcular(altura,peso){
    let imc = peso / ( altura + altura);

     return imc;
}

function classificaçao () {

    if(imc < 18) {
        return "abaixo do peso"
    }else if (imc < 25) {
        return "peso normal"
    }else if 

    }
}

function Organizardados(dadosdousuario, valorImc, classificacaoImc){
    let dataAtual = Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short'}).format{Date.now()}
    let dadosdousuarioAtt = {
        ...dadosusuarios;
        imc : valorImc.toFixed(2)
        dataCadastro

    }

//função  responsável por armazenar o objeto dentro do local storage


s