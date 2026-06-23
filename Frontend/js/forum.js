let topicoAtualId = null;
let proximoTopicoId = 7;

// Abas de Categoria
document.querySelectorAll('.cat-pill').forEach(p => p.addEventListener('click', () => {
  document.querySelectorAll('.cat-pill').forEach(x => x.classList.remove('active'));
  p.classList.add('active');
}));

// Ordenação
document.querySelectorAll('.sort-btn').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.sort-btn').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
}));

// Estrutura de dados simulada
const bancoTopicos = {
  1: {
    titulo: "Bem-vindo(a) ao JAVELF! Leia antes de postar.",
    meta: `<span class="tag" style="background:rgba(245,158,11,0.15);color:#f59e0b;">anúncio</span>`,
    posts: [{ autor: "Admin", avatar: "A", cor: "#7c3aed", tempo: "1d", texto: "Olá! Lembre-se de checar as diretrizes antes de criar novas discussões na aba do Norte Perdido.", likes: 42 }]
  },
  2: {
    titulo: "O que voce mais gostou gameplay?",
    meta: `<span class="tag" style="background:rgba(59,130,246,0.15);color:#3b82f6;">gameplay</span><span class="tag" style="background:rgba(139,92,246,0.15);color:#8b5cf6;">builds</span>`,
    posts: [
      { autor: "Julia.Pirrer", avatar: "JP", cor: "#6277f1", tempo: "3h", texto: "GENTE, EU TO VICIADA :3. eu adorei a história do jogo porque passa uma vibe de alice das maravilhas, sabe né? estou ansiosa para chegar na segunda parte. ", likes: 31 },
      { autor: "Tonhonhoin", avatar: "Tonhoin", cor: "#f1b6dd", tempo: "2h", texto: "Esse jogo é incrivelllllll, amei o sistema de poderes, recomendo super, arigato!", likes: 5000 },
      { autor: "Wayne", avatar: "W", cor: "#000000", tempo: "1h", texto: "Transcedente e viciante! Não consigo parar de jogar.", likes: 7 },
      { autor: "Diesel", avatar: "DI", cor: "#ff0000", tempo: "37m", texto: "Comprei e achei uma maravilha. O melhor jogo que já joguei na vida. Nota 1000.", likes: 200 },
      { autor: "Rosa Diaz", avatar: "RD", cor: "#5100ff", tempo: "40m", texto: "Achei o jogo legal e intuitivo. Nota 1000.", likes: 100 }
    ]
  },
  3: {
    titulo: "Qual é a melhor parte da Lore ?",
    meta: `<span class="tag" style="background:rgba(236,72,153,0.15);color:#ec4899;">lore</span><span class="tag" style="background:rgba(239,68,68,0.15);color:#ef4444;">spoiler</span>`,
    posts: [{ autor: "Jones", avatar: "joni", cor: "#8b5cf6", tempo: "4m", texto: "Uauauauauaua euu achei muito BBBOOom o final! não vejo a hora da parte 2", likes: 1500 }]
  },
  4: {
    titulo: "Mostre seu personagem favorito!",
    meta: `<span class="tag" style="background:rgba(249,115,22,0.15);color:#f97316;">showcase</span><span class="tag" style="background:rgba(168,85,247,0.15);color:#a855f7;">fanart</span>`,
    posts: [{ autor: "Power_guido", avatar: "PG", cor: "#06b6d4", tempo: "8m", texto: "A nanami é claro.", likes: 25 }]
  },
  5: {
    titulo: "JAVELF EQUIP",
    meta: `<span class="tag" style="background:rgba(59,130,246,0.15);color:#3b82f6;">guia</span><span class="tag" style="background:rgba(16,185,129,0.15);color:#10b981;">iniciante</span>`,
    posts: [{ autor: "Evellyn", avatar: "Evy", cor: "#00ffdd", tempo: "3h", texto: "Falaremos aqui sobre as novas atualizações, sobre o novo capitulo! e até sobre o nosso novo projerto!!!", likes: 99 }]
  },
  6: {
    titulo: "estilingue ou espada?",
    meta: `<span class="tag" style="background:rgba(219,39,119,0.15);color:#db2777;">classes</span>`,
    posts: [{ autor: "Sora", avatar: "S", cor: "#f43f5e", tempo: "5d", texto: "KKKKKKK eu prefiro a estilingue.", likes: 14 }]
  }
};

function carregarComentarios(id) {
  topicoAtualId = id;
  document.getElementById("forumWrapper").classList.add("panel-open");
  document.getElementById("topicPanel").style.display = "flex";

  document.querySelectorAll('.thread-row').forEach(row => row.classList.remove('selected-row'));
  const elementoLinha = document.getElementById(`t${id}`);
  if (elementoLinha) elementoLinha.classList.add('selected-row');

  renderizarComentarios();
}

function renderizarComentarios() {
  if (!topicoAtualId) return;
  const item = bancoTopicos[topicoAtualId];
  if (!item) return;

  document.getElementById("topicTitle").innerText = item.titulo;

  const totalComentarios = item.posts.length;
  const sufixoContador = totalComentarios === 1 ? '1 comentário' : `${totalComentarios} comentários`;
  document.getElementById("panelMeta").innerHTML = `${item.meta}<span class="meta-info">${sufixoContador}</span>`;

  // Atualiza o contador numérico de respostas diretamente na tabela do fórum principal
  const linhaTabela = document.getElementById(`t${topicoAtualId}`);
  if (linhaTabela) {
    const spanReplies = linhaTabela.querySelector('.replies-col .stat-num');
    if (spanReplies) spanReplies.innerText = totalComentarios;
  }

  let html = "";
  item.posts.forEach((p, index) => {
    html += `
          <div class="comment-card">
            <div class="comment-avatar" style="background: ${p.cor}">${p.avatar}</div>
            <div class="comment-body">
              <div class="comment-top">
                <span class="comment-author">${p.autor}</span>
                <span class="comment-time">${p.tempo}</span>
              </div>
              <div class="comment-text">${p.texto}</div>
              <div class="comment-actions">
                <div class="action-item">♡ ${p.likes}</div>
                <div class="action-item">↩ Responder</div>
                <div class="action-item" onclick="apagarComentario(${index})" style="color: rgba(244,63,94,0.6);">🗑 Apagar</div>
              </div>
            </div>
          </div>
        `;
  });

  if (item.posts.length === 0) {
    html = '<div style="color: rgba(255,255,255,0.3); text-align: center; padding: 20px; font-size: 13px;">Nenhum comentário por aqui ainda.</div>';
  }

  document.getElementById("topicContent").innerHTML = html;
}

function apagarComentario(index) {
  if (!topicoAtualId) return;
  if (confirm("Tem certeza que deseja apagar este comentário?")) {
    bancoTopicos[topicoAtualId].posts.splice(index, 1);
    renderizarComentarios();
  }
}

function fecharPainel() {
  topicoAtualId = null;
  document.getElementById("forumWrapper").classList.remove("panel-open");
  document.getElementById("topicPanel").style.display = "none";
  document.querySelectorAll('.thread-row').forEach(row => row.classList.remove('selected-row'));
}

// --- ENVIAR COMENTÁRIOS ---
const textarea = document.querySelector('.reply-input-wrapper textarea');
const btnSend = document.querySelector('.btn-send');

function enviarNovoComentario() {
  const texto = textarea.value.trim();
  if (!topicoAtualId || texto === "") return;

  bancoTopicos[topicoAtualId].posts.push({
    autor: "Você",
    avatar: "V",
    cor: "#df49da",
    tempo: "Agora",
    texto: texto.replace(/\n/g, '<br>'),
    likes: 0
  });

  textarea.value = "";
  renderizarComentarios();
  const container = document.querySelector('.panel-container');
  container.scrollTop = container.scrollHeight;
}

btnSend.addEventListener('click', enviarNovoComentario);
textarea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    enviarNovoComentario();
  }
});

// --- ADICIONAR NOVO TÓPICO ---
function abrirModalNovoTopico() {
  document.getElementById("newTopicModal").style.display = "flex";
}

function fecharModalNovoTopico() {
  document.getElementById("newTopicModal").style.display = "none";
  document.getElementById("newTopicTitle").value = "";
  document.getElementById("newTopicContent").value = "";
}

function salvarNovoTopico() {
  const titulo = document.getElementById("newTopicTitle").value.trim();
  const categoriaSelect = document.getElementById("newTopicCategory");
  const categoria = categoriaSelect.value;
  const conteudo = document.getElementById("newTopicContent").value.trim();

  if (titulo === "" || conteudo === "") {
    alert("Por favor, preencha o título e o conteúdo inicial do tópico!");
    return;
  }

  const corCategoria = categoriaSelect.options[categoriaSelect.selectedIndex].getAttribute('data-color');

  bancoTopicos[proximoTopicoId] = {
    titulo: titulo,
    meta: `<span class="tag" style="background:${corCategoria}26; color:${corCategoria};">${categoria.toLowerCase()}</span>`,
    posts: [{
      autor: "Você",
      avatar: "V",
      cor: "#df49da",
      tempo: "Agora",
      texto: conteudo.replace(/\n/g, '<br>'),
      likes: 0
    }]
  };

  const tabelaForum = document.querySelector('.forum-table');
  const novaLinhaHTML = `
        <div class="thread-row" id="t${proximoTopicoId}" onclick="carregarComentarios(${proximoTopicoId})">
          <div class="title-col">
            <div class="title-line">
              <span class="thread-title">${titulo}</span>
            </div>
            <div class="tags"><span class="tag" style="background:${corCategoria}1a; color:${corCategoria};">${categoria.toLowerCase()}</span></div>
          </div>
          <div class="cat-col cat-label"><span class="cat-dot" style="background:${corCategoria}"></span><span style="color:${corCategoria}">${categoria}</span></div>
          <div class="users-col avatars"><div class="avatar" style="background:#df49da">V</div></div>
          <div class="replies-col stat-col"><span class="stat-num">1</span></div>
          <div class="views-col stat-col"><span class="stat-sm">1</span></div>
          <div class="time-col stat-col"><span class="stat-sm">Agora</span></div>
        </div>
      `;

  const cabecalho = tabelaForum.querySelector('.table-head');
  cabecalho.insertAdjacentHTML('afterend', novaLinhaHTML);

  const idCriado = proximoTopicoId;
  fecharModalNovoTopico();
  carregarComentarios(idCriado);

  proximoTopicoId++;
}