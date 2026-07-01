
const formulario = document.getElementById("supportForm");

const mensagem = document.getElementById("mensagemSucesso");

formulario.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const dados = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        assunto: formulario.assunto.value,
        mensagem: formulario.mensagem.value
    };
    try{
        const resposta = await fetch("http://localhost:3000/support",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(dados)
        });
        const resultado = await resposta.json();

        mensagem.innerHTML = resultado.mensagem;
        mensagem.classList.add("mostrar");

        formulario.reset();

    }catch(error){
        mensagem.innerHTML = "Erro ao enviar a mensagem.";
    }
   
    

});


