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
  const equipamentos = document.getElementById('equipamentos').value;
  const telefone = document.getElementById('telefone').value;

  const texto = `**CAMPANHA PREVENTIVA DE CLIENTES OFFLINE**

${motivo}

PROPOSTA DE ACORDO: ${proposta}

DATA LIMITE PARA PAGAMENTO: ${dataFormatada}

CASO O MESMO NÃO TENHA INTERESSE, FAZER A RETIRADA DOS EQUIPAMENTOS

TEL.: ${telefone}

${equipamentos}
Data da O.S: ${dataOSFormatada}`;

  navigator.clipboard.writeText(texto)
    .then(() => alert('Script copiado com sucesso!'))
    .catch(() => alert('Falha ao copiar o script.'));
}

function limparEncTecnico() {
  document.getElementById('proposta').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('dataOS').value = '';
  document.getElementById('dataPagamento').value = '';
}