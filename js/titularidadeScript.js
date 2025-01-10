function scriptTroca() {
  const autorizado = document.querySelector('input[name="autorizado"]:checked')?.value || "";
  const autorizacao = document.querySelector('input[name="autorizacao"]:checked')?.value || "";
  const selfie = document.querySelector('input[name="selfie"]:checked')?.value || "";
  const documentos = document.querySelector('input[name="documentos"]:checked')?.value || "";
  const endereco = document.querySelector('input[name="endereco"]:checked')?.value || "";
  const plano = document.querySelector('input[name="plano"]:checked')?.value || "";
  const atualTitular = document.getElementById("atualTitular").value;
  const futuroTitular = document.getElementById("futuroTitular").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const motivo = document.getElementById("motivo").value;

  const script = `TROCA DE TITULARIDADE

AUTORIZADO PELO ATUAL TITULAR? (${autorizado === "SIM" ? "x" : " "}) SIM  (${autorizado === "NÃO" ? "x" : " "}) NÃO;
(${autorizacao === "LIGAÇÃO" ? "x" : " "}) AUTORIZADO VIA LIGAÇÃO (${autorizacao === "HUGGY" ? "x" : " "}) HUGGY (${autorizacao === "PRESENCIAL" ? "x" : " "}) PRESENCIAL
(${selfie === "SIM" ? "x" : " "}) AUTORIZADO COM SELFIE;
DOCUMENTOS DO FUTURO TITULAR ANEXADOS?  (${documentos === "SIM" ? "x" : " "}) SIM  (${documentos === "NÃO" ? "x" : " "}) NÃO;
ENDEREÇO PERMANECERÁ O MESMO?  (${endereco === "SIM" ? "x" : " "}) SIM  (${endereco === "NÃO" ? "x" : " "}) NÃO;
PLANO E VENCIMENTO PERMANECERÃO O MESMO?  (${plano === "SIM" ? "x" : " "}) SIM  (${plano === "NÃO" ? "x" : " "}) NÃO;

ATUAL TITULAR: ${atualTitular}
FUTURO TITULAR: ${futuroTitular}
EMAIL: ${email}
TELEFONE: ${telefone}
MOTIVO DA TROCA DE TITULARIDADE: ${motivo}

CONFIGURAR O PPOE DO CADASTRO ANTERIOR PARA O NOVO.
O CONTRATO SERÁ CANCELADO APÓS A TROCA SER CONCLUÍDA.`;

  navigator.clipboard.writeText(script).then(() => {
    alert("Script copiado com sucesso!");
  }).catch(() => {
    alert("Falha ao copiar o script. Tente novamente.");
  });
}

function limparTroca() {
  document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
  document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea').forEach(input => input.value = "");
}
