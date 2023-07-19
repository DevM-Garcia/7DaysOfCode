const nome = prompt('Qual o seu nome ?');
const idade = prompt('Qual a sua idade ?');
const curso = prompt('Qual o seu curso ?');

alert(`Olá ${nome}, sua idade é ${idade} anos e vc esta estudando ${curso} !`)

const pergunta = prompt(`Você gosta de estudar ${curso} ?
Responda com o número 1 para SIM ou 2 para NÃO.`);

if (pergunta == '1'){
    alert('Muito bom! Continue estudando e você terá muito sucesso.') 
}else{
    alert(' Ahh que pena... Já tentou aprender outras linguagens?')
}