function formatarDocumento() {
    const inputCpfCnpj = document.getElementById('cpf');
    let valor = inputCpfCnpj.value.replace(/\D/g, '');

    if (valor.length <= 11) {
        valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    inputCpfCnpj.value = valor;
}

function formatarTelefone() {
    const inputTel = document.getElementById('tel');
    let telefone = inputTel.value.replace(/\D/g, '');

    if (telefone.length === 11) {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3');
    } else if (telefone.length === 10 || telefone.length === 9) {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    inputTel.value = telefone;
}

function copiarScript() {
    const motivo = document.getElementById('scriptMotivo').value;
    const telefone = document.getElementById('tel').value;
    const operador = document.getElementById('operador').value;

    const scriptFormatado = `MOTIVO: ${motivo}

TEL.: ${telefone}

OP.: ${operador}`;

    const tempElement = document.createElement('textarea');
    tempElement.value = scriptFormatado;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    alert('Script copiado para a área de transferência!');
}

function limparScript() {
    document.getElementById('scriptCliente').value = '';
    document.getElementById('scriptMotivo').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('tel').value = '';
}