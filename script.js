const area = prompt('Você gostaria de seguir na área de Front-end ou Back-end ? Digite o nome a área ...'); 
let linguagem = ''

if(area === 'Front-end'){
    linguagem = prompt('Você quer aprender React ou Vue ?')
}else if (area === 'Back-end'){
    linguagem = prompt('Você quer aprender Java ou C# ?')
}
else{
    alert('você não inseriu os dados corretamente')
}

const especialidadeOuFullstack = prompt('Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack ')

if(especialidadeOuFullstack === '1') {
    alert(`continue se especializando em ${linguagem} para dominar a área ${area}`)
}else if (especialidadeOuFullstack === '2'){
    alert(`chegou a hora de aprender outra linguagens além de ${linguagem} caso queira se tornar um FullStack`)
}else{
    alert('você não inseriu os dados corretamente')
}
let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
