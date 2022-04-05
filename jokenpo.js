console.log();
console.clear();
const prompt = require('prompt-sync')();


// Declarei as variáveis! 
let opcoes = ["", "PAPEL", "TESOURA", "PEDRA"]
let usuario;
let pontosUsuario = 0
let pontosPc = 0
let empate = 0
let again;

do {
// Chamei os PROMPT para que possa interagir com o jogador e começar a introduzir nas escolhas.
let nome = prompt(`Olá, vamos jogar! Qual é seu nome? `);
console.log('=====================');
// Esse PROMPT serve para que o jogador possa escolher quantas rodadas jogar, e não ficar pra sempre no looping;
let rodadas = +prompt(`Quantas rodadas você quer jogar? `);
console.log('=====================');

// Esse WHILE foi criado para que o usuário digite algo que não seja 0 ou menor que ele. 
while (rodadas <= 0){
    console.log('Quantidade inválida.')
    rodadas = +prompt(`Quantas rodadas você quer jogar? `);
    console.log('=====================');
}
// O FOR foi para delimitar a quantidade de jogadas digitadas por ele no WHILE acima.
for (let contador = 0; contador < rodadas; contador++) {
// Foi criado também o DO para que possa executar tudo que tem dentro dele, as condicionais de vitória e derrotas.
    do {
        usuario = prompt(`${nome}, vamos começar! Escolha uma opção de jogada entre: PAPEL, TESOURA, PEDRA: ` ).toUpperCase();
        console.log(`Você escolheu: ${usuario}`);
        // Essa variável é pra o computador decida entre os elementos do Array
        let escolhaComputador = opcoes[Math.floor(Math.random()*3 + 1)]
        console.log(`O computador escolheu: ${escolhaComputador}`);
        // Todas as condicionais de vitórias do usuário.
        if ((usuario == opcoes[1] && escolhaComputador == opcoes[3]) || (usuario == opcoes[3] && escolhaComputador == opcoes[2]) || (usuario == opcoes[2] && escolhaComputador == opcoes[1])) {
        console.log('=====================');
        console.log(`${nome}, você ganhou! `)
        console.log('=====================');
        pontosUsuario++
    // Todas as condicionais de vitórias do PC.
        }   else if ((usuario == opcoes[3] && escolhaComputador == opcoes[1]) || (usuario == opcoes[2] && escolhaComputador == opcoes[3]) || (usuario == opcoes[1] && escolhaComputador == opcoes[2])) {
        console.log('=====================');
        console.log(`${nome}, quen-quen-quennnnnnn! Você perdeu!`)
        console.log('=====================');
        pontosPc++
        // Todas as condicionais de empate.
        }   else if ((usuario == opcoes[1] && escolhaComputador == opcoes[1]) || (usuario == opcoes[2] && escolhaComputador == opcoes[2]) || (usuario == opcoes[3] && escolhaComputador == opcoes[3])) {
        console.log('=====================');
        console.log(`Empatou! `)
        console.log('=====================');
        empate++

        } else {
            console.log(`Digite uma opção válida!`)
        }
        // WHILE para que ele não possa escolher elementos que não sejam listados no array.
        }   while (usuario != opcoes[1] && usuario != opcoes[2] && usuario != opcoes[3]) 
        // CONSOLES para a soma de pontos das escolhas do jogo.
        console.log(`Pontos do jogador: ${pontosUsuario}`);
        console.log(`Pontos do computador: ${pontosPc}`);
        console.log(`Empate: ${empate}`);
    
        // Condicional para informar que foi o campeão ou se deu empate no game. 
        if (pontosUsuario > pontosPc) {
            console.log(`${nome}, você foi o campeão! `)
        } else if (pontosPc > pontosUsuario){
            console.log(`Você foi derrotado!`) 
        } else {
            console.log(`${nome}, você e o PC empataram!`)
        }

} 
// Esse DO ... WHILE é pra repetir o jogo quando quiser. 
    do{
        again = +prompt(`E aí, ${nome}, quer jogar de novo? 1-SIM 2-NÃO `);
        console.log('=====================');
        if (again == 2) {
            console.log(`Beleza então, tmj!)`)
        } else if (again != 1 && again != 2) {
            console.log(`Não entendi!  `)
            again = +prompt(`E aí, ${nome}, quer jogar de novo? 1-SIM 2-NÃO `)
            console.log('=====================');
        }
    }while(again!=1 && again!=2)
    
} while (again == 1)
