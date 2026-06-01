const mensagem =
`Há muito tempo, em uma floresta esquecida,
existia uma pequena aldeia.

Todos possuíam nomes...
menos um jovem aventureiro.

Sua jornada começou quando
o último fragmento de seu nome desapareceu.`;

const elemento = document.getElementById("texto");

let i = 0;

function escreverTexto() {

    if(i < mensagem.length){

        elemento.innerHTML += mensagem.charAt(i);

        i++;

        setTimeout(escreverTexto, 40);
    }
}

escreverTexto();