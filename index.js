const dadosCardControleMedicamentos = {
    titulo: 'Controle de Medicamentos',
    imagem: './assets/controle-de-medicamentos.png',
    gif: 'https://i.imgur.com/d3voSnU.gif',
    urlRepositorio: 'https://github.com/felpss0/Controle-De-Medicamentos-2025/tree/aspnet',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições — com foco na rastreabilidade das movimentações de estoque.`
};



let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card não selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');
    const urlRepositorio = document.getElementById('urlRepositorio');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;
    urlRepositorio.href = cardSelecionado.urlRepositorio;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleMedicamentos)
        return;

    cardSelecionado = dadosCardControleMedicamentos;
    carregarDadosCardAtual();
}

//function selecionarSegundoCard() {
//    if (cardSelecionado == dadosCardGestaoEquipamentos)
//        return;

//    cardSelecionado = dadosCardGestaoEquipamentos;
//    carregarDadosCardAtual();
//}

function abrirModalProjeto() {
    document.getElementById('portfolioModalLabel').textContent = cardSelecionado.titulo;
    document.getElementById('portfolioModalImage').src = cardSelecionado.gif;
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    
    const btnVerProjeto = document.getElementById("btnVerProjeto")

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    
    btnVerProjeto.addEventListener('click', abrirModalProjeto);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);