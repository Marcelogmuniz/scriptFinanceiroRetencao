function calcularProporcional() {
  const dataAtualInput = document.getElementById('vencAtual').value;
  const novaDataInput = document.getElementById('vencNovo').value;
  const valorPlanoInput = document.getElementById('valorPlano').value.replace(',', '.');

  // Validação
  if (!dataAtualInput || !novaDataInput || !valorPlanoInput) return;

  const dataAtual = new Date(dataAtualInput);
  const novaData = new Date(novaDataInput);
  const valorPlano = parseFloat(valorPlanoInput);

  if (isNaN(dataAtual.getTime()) || isNaN(novaData.getTime()) || isNaN(valorPlano)) return;

  const umDia = 1000 * 60 * 60 * 24;
  const diferencaDias = Math.abs(Math.round((novaData - dataAtual) / umDia));
  const valorPorDia = valorPlano / 30;
  const valorProporcional = valorPorDia * diferencaDias;
  const novoValor = valorPlano + valorProporcional;

  document.getElementById('resultadoVenc').value = novoValor.toFixed(2).replace('.', ',');
}

// Ativa o cálculo ao digitar ou mudar qualquer campo
document.querySelectorAll('.input-venc').forEach(input => {
  input.addEventListener('input', calcularProporcional);
}); 