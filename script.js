//JS é uma linguagem fracamente tipada e dinâmica
/*Variáveis:
    var -> global e poderá funcionar fora do escopo de um bloco
    const e let são locais e só funcionam no escopo onde foram criad
*/
let y =1;

{
    y = 0
    console.log('valor de y eh', y)
}

console.log('agora o valor de y eh ', y)
//saida: valor de y eh = 0
//       agora o valor de y eh = 0
//isso acontece pq o y ta sobrescrevendo o let y, já que no escopo o y não esta usando var. reservada
//isso eh chamado de hoisting