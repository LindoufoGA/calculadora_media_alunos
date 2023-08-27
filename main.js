const form = document.getElementById('form-atividade');
const imgAprovado = '<img id="imgAprovado"src="images/images/aprovado.png" alt="emoji celebrando"/>';
const imgReprovado = '<img id="imgReprovado" src="images/images/reprovado.png" alt="emoji triste"/>';
let linhas = '';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado-aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado-reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digita a nota minima: '));

form.addEventListener('submit', function(aluno){
    aluno.preventDefault();
    adicionaLinha();
    atualizandoTabela();
    atualizandoMediaFinal();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert('A Atividade ' + inputNomeAtividade.value + ' Já foi inserida' );
    }
    else {
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += '<td>' + inputNomeAtividade.value + '</td>';
    linha += '<td>' + inputNotaAtividade.value + '</td>';
    linha += inputNotaAtividade.value >=notaMinima ? imgAprovado : imgReprovado;
    linha += '</tr>';

    linhas += linha;
    }
    

    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
}

function atualizandoTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizandoMediaFinal() {
   const mediaFinal = calculaMediaFinal();
   document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2)
   document.getElementById('media-resultado').innerHTML = mediaFinal >=notaMinima ? spanAprovado : spanReprovado;
}
function calculaMediaFinal() { 
    let someDasNotas = 0;
    for(let i = 0; i<notas.length; i++) {
        someDasNotas += notas[i];
    }

    return someDasNotas / notas.length;
}