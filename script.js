function enviarWhatsApp() {
  const nome = document.getElementById("nome").value.trim();
  const motivo = document.getElementById("motivo").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome) {
    alert("Por favor, preencha seu nome antes de continuar.");
    return;
  }

  const texto = `Olá, meu nome é *${nome}*.
Motivo do contato: *${motivo}*
Mensagem: ${mensagem || "—"}`;

  // Substitua pelo número da psicóloga (com DDI +55 e DDD)
  const numero = "5598991904552";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}
