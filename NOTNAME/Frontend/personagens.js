const personagens = [

{
nome:"Nanami",

descricao:
"Nanami é a protagonista da aventura e busca descobrir os segredos do seu passado.",

sprite:
"imagem/personagens/nanami.png",

spriteDescricao:
"imagem/personagens/nanami-completa.png",

fundo:
"imagem/fundo/floflo.jpg"
},

{
nome:"Gata",

descricao:
"Uma gata misteriosa que aparece quando algo importante está prestes a acontecer.",

sprite:
"imagem/personagens/gata.png",

spriteDescricao:
"imagem/personagens/gata-completa.png",

},

{
nome:"Gnomos",

descricao:
"Pequenas criaturas mágicas que vivem escondidas na floresta.",

sprite:
"imagem/personagens/gnomos.png",

spriteDescricao:
"imagem/personagens/gnomos-completo.png"
},

{
nome:"Corvo",

descricao:
"Observa tudo do alto das árvores e parece conhecer os segredos do mundo.",

sprite:
"imagem/personagens/corvo.png",

spriteDescricao:
"imagem/personagens/corvo-completo.png"
},

{
nome:"Fantasma",

descricao:
"Uma entidade perdida entre os mundos que acompanha Nanami.",

sprite:
"imagem/personagens/fantasma.png",

spriteDescricao:
"imagem/personagens/fantasma-completo.png",

fundo:
"imagem/fundo/cemiterio.png" 
},

{
nome:"Gato",

descricao:
"Um gato curioso que surge nos momentos mais inesperados.",

sprite:
"imagem/personagens/gato.png",

spriteDescricao:
"imagem/personagens/gato-completo.png"
},

{
nome:"Jacaré",

descricao:
"Uma criatura antiga que habita os pântanos esquecidos.",

sprite:
"imagem/personagens/jacare.png",

spriteDescricao:
"imagem/personagens/jacare-completo.png"
}

];

let atual = 0;

const nome =
document.getElementById("nome");

const descricao =
document.getElementById("descricao");

const spritePrincipal =
document.getElementById("spritePrincipal");

const spriteDescricao =
document.getElementById("spriteDescricao");

const card =
document.getElementById("personagemCard");

function atualizar(){

nome.textContent =
personagens[atual].nome;

descricao.textContent =
personagens[atual].descricao;

spritePrincipal.src =
personagens[atual].sprite;

spriteDescricao.src =
personagens[atual].spriteDescricao;

card.style.backgroundImage = `url('${personagens[atual].fundo}')`;
}

document
.getElementById("proximo")
.addEventListener("click",()=>{

atual++;

if(atual >= personagens.length){

atual = 0;
}

atualizar();
});

document
.getElementById("anterior")
.addEventListener("click",()=>{

atual--;

if(atual < 0){

atual = personagens.length - 1;
}

atualizar();
});

atualizar();