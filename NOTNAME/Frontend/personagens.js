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
"imagem/fundo/floresta.gif"
},

{
nome:"BASTET",

descricao:
"Uma gata misteriosa que aparece quando algo importante está prestes a acontecer.",

sprite:
"imagem/personagens/gata.png",

spriteDescricao:
"imagem/personagens/gata-completa.png",

fundo:
"imagem/fundo/egito.gif"

},

{
nome:"Gnomos",

descricao:
"Pequenas criaturas mágicas que vivem escondidas na floresta.",

sprite:
"imagem/personagens/gnomo-vermelho.png",

spriteDescricao:
"imagem/personagens/gnomos-completo.png",

fundo:
"imagem/fundo/casasgnomo.gif"
},

{
nome:"Corvo",

descricao:
"Observa tudo do alto das árvores e parece conhecer os segredos do mundo.",

sprite:
"imagem/personagens/corvo.png",

spriteDescricao:
"imagem/personagens/corvo-completo.png",

fundo:
"imagem/fundo/dark.gif"
}, 

{
nome:"Fantasma",

descricao:
"Uma entidade perdida entre os mundos que acompanha Nanami.",

sprite:
"imagem/personagens/fantasmabu.png",

spriteDescricao:
"imagem/personagens/fantasma-completo.png",

fundo:
"imagem/fundo/cemiterio.gif" 
},

{
nome:"Gato",

descricao:
"Um gato curioso que surge nos momentos mais inesperados.",

sprite:
"imagem/personagens/gato.png",

spriteDescricao:
"imagem/personagens/gato-completo.png",

fundo:
"imagem/fundo/antigo.gif"
},

{
nome:"Jacaré",

descricao:
"Uma criatura antiga que habita os pântanos esquecidos.",

sprite:
"imagem/personagens/jacarezinho.png",

spriteDescricao:
"imagem/personagens/jacare-completo.png",

fundo:
"imagem/fundo/pantano.gif"
}

];

let atual = 0;

const nome =
document.getElementById("nome");

const descricao =
document.getElementById("descricao");

const spritePrincipal =
document.getElementById("spritePrincipal");

const descricaoNanami =
document.getElementById("descricaoNanami");

const card =
document.getElementById("personagemCard");

const spriteDescricao = document.getElementById("spritePrincipal");

function atualizar(){

nome.textContent =
personagens[atual].nome;

descricao.textContent =
personagens[atual].descricao;

spritePrincipal.src =
personagens[atual].sprite;

if (personagens[atual].fundo) {
    card.style.backgroundImage = `url('${personagens[atual].fundo}')`;
  } else {
    card.style.backgroundImage = "none"; // Ou coloque um fundo padrão aqui, ex: "url('imagem/fundo/padrao.jpg')"
  }

if(personagens[atual].nome ==="Nanami"){
    descricaoNanami.style.display = "block";
}else{
    descricaoNanami.style.display = "none";
}
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

