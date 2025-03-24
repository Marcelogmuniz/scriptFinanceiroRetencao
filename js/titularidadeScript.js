function scriptTroca() {
  const autorizado = document.querySelector('input[name="autorizado"]:checked')?.value || "";
  const autorizacao = document.querySelector('input[name="autorizacao"]:checked')?.value || "";
  const selfie = document.querySelector('input[name="selfie"]:checked')?.value || "";
  const documentos = document.querySelector('input[name="documentos"]:checked')?.value || "";
  const endereco = document.querySelector('input[name="endereco"]:checked')?.value || "";
  const plano = document.querySelector('input[name="plano"]:checked')?.value || "";
  const atualTitular = document.getElementById("atualTitular").value;
  const futuroTitular = document.getElementById("futuroTitular").value;
  const emailTitular = document.getElementById("emailTitular").value;
  const telefoneTitular = document.getElementById("telefoneTitular").value;
  const motivoTitular = document.getElementById("motivoTitular").value;

  const script = `TROCA DE TITULARIDADE

AUTORIZADO PELO ATUAL TITULAR? (${autorizado === "SIM" ? "x" : " "}) SIM (${autorizado === "NÃO" ? "x" : " "}) NÃO;
AUTORIZADO VIA (${autorizacao === "LIGAÇÃO" ? "x" : " "}) LIGAÇÃO (${autorizacao === "HUGGY" ? "x" : " "}) HUGGY (${autorizacao === "PRESENCIAL" ? "x" : " "}) PRESENCIAL
AUTORIZADO COM SELFIE (${selfie === "SIM" ? "x" : " "}) SIM (${selfie === "NÃO" ? "x" : " "}) NÃO;
DOCUMENTOS DO FUTURO TITULAR ANEXADOS? (${documentos === "SIM" ? "x" : " "}) SIM (${documentos === "NÃO" ? "x" : " "}) NÃO;
ENDEREÇO PERMANECERÁ O MESMO? (${endereco === "SIM" ? "x" : " "}) SIM (${endereco === "NÃO" ? "x" : " "}) NÃO;
PLANO E VENCIMENTO PERMANECERÃO O MESMO? (${plano === "SIM" ? "x" : " "}) SIM (${plano === "NÃO" ? "x" : " "}) NÃO;

ATUAL TITULAR: ${atualTitular}
FUTURO TITULAR: ${futuroTitular}
EMAIL: ${emailTitular}
TELEFONE: ${telefoneTitular}
MOTIVO DA TROCA DE TITULARIDADE: ${motivoTitular}

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
