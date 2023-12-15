const inputDescricao = document.getElementById("inputDescricao");
const inputValorApagar = document.getElementById("inputValorApagar");
const btnPagar = document.getElementById("btnPagar");
const saidaContas = document.getElementById("saidaContas");
const saidaTotal = document.getElementById("saidaTotal");
//Variaveis globais para contar e somar os valores 

let numeroDeContas = 0;
let valorTotal = 0;
let quantidade = "";

function registrarContas() {
    const descricao = inputDescricao.value;
    const valorApagar = parseFloat(inputValorApagar.value);

    //Checar erros dos inputs

    if (descricao === "" || valorApagar === 0 || isNaN(valorApagar)) {
        alert("Por favor, preencha todos os campos");
        inputDescricao.value = "";
        inputValorApagar.value = "";
        inputDescricao.focus();
        return;
        
    }

    numeroDeContas++;
    valorTotal += valorApagar;
    //linhas com as contas

    quantidade += `${descricao} - R$ ${valorApagar.toFixed(2)} \n`;	

    saidaContas.textContent = `${quantidade} ----------------------`;
    saidaTotal.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;

    inputDescricao.value = "";
    inputValorApagar.value = "";
    inputDescricao.focus();
} 