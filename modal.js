function abrirDetalhes(nome, profissao, status, habilidades, bio, email, telefone) {
    document.getElementById("modalNome").innerText = nome;
    document.getElementById("modalProfissao").innerText = profissao;
    document.getElementById("modalStatusBadge").innerText = status;
    document.getElementById("modalHabilidades").innerText = habilidades;
    document.getElementById("modalBio").innerText = bio;
    document.getElementById("modalEmail").innerText = email;
    document.getElementById("modalTelefone").innerText = telefone;

    // Exibe a janela de detalhes na tela
    document.getElementById("modalDetalhes").style.display = "flex";
}

function fecharDetalhes() {
    // Esconde a janela de detalhes
    document.getElementById("modalDetalhes").style.display = "none";
}