function formatarTelAcordo() {
  const inputTelAcordo = document.getElementById('telefone');
  let telAcordo = inputTelAcordo.value.replace(/\D/g, '');

  if (telAcordo.length === 11) {
      telAcordo = telAcordo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3');
  } else if (telAcordo.length === 10 || telAcordo.length === 9) {
      telAcordo = telAcordo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  inputTelAcordo.value = telAcordo;
}

function copiarEncTecnico() {
  const dataPagamento = document.getElementById('dataPagamento').value;

  const anoPagamento = dataPagamento.substring(0, 4);
  const mesPagamento = dataPagamento.substring(5, 7);
  const diaPagamento = dataPagamento.substring(8, 10);

  const dataFormatada = `${diaPagamento}/${mesPagamento}/${anoPagamento}`;

  const dataOS = document.getElementById('dataOS').value;

  const ano = dataOS.substring(0, 4);
  const mes = dataOS.substring(5, 7);
  const dia = dataOS.substring(8, 10);

  const dataOSFormatada = `${dia}/${mes}/${ano}`;

  const motivo = document.getElementById('motivo').value
  const proposta = document.getElementById('proposta').value;
  const valor = document.getElementById('valorAcordo').value;
  const equipamentos = document.getElementById('equipamentos').value;

  const texto = `ORDEM DE SERVIÇO - TENTATIVA DE CONTATO

MOTIVO DO CONTATO: ${motivo}

*PROPOSTA DE ACORDO:*
- Proposta de acordo: ${proposta}
- Valor do Acordo: ${valor}
- Data Limite para Pagamento: ${dataFormatada}
- Caso o cliente não tenha interesse em regularizar a situação, procederemos com a retirada dos equipamentos.

*EQUIPAMENTOS A RETIRAR (se aplicável):* 
${equipamentos}

DATA DA O.S.: ${dataOSFormatada}

TELEFONE PARA CONTATO: ${telAcordo}`;

  navigator.clipboard.writeText(texto)
    .then(() => alert('Script copiado com sucesso!'))
    .catch(() => alert('Falha ao copiar o script.'));
}

function limparEncTecnico() {
  document.getElementById('proposta').value = '';
  document.getElementById('valorAcordo').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('dataOS').value = '';
  document.getElementById('dataPagamento').value = '';
}