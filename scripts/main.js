// Função para atualizar dinamicamente as opções de destino com base na origem selecionada

function atualizarOpcoes(origemId, destinoId) {
    const origemSelect = document.getElementById(origemId);
    const destinoSelect = document.getElementById(destinoId);

    const origemIndex = origemSelect.selectedIndex;
    const origemValue = origemSelect.options[origemIndex].value;

    const opcoesDestino = destinoSelect.options;

    for (let i = 0; i < opcoesDestino.length; i++) {
        const opcao = opcoesDestino[i];
        if (opcao.value === origemValue || opcao.value === '') {
            opcao.style.display = 'none'; // Oculta opções indesejadas e a opção padrão
        } else {
            opcao.style.display = 'inline'; // Exibe opções desejadas
        }
    }
}


// Função para conversão de comprimento
function converterComprimento(event) {
    event.preventDefault();

    const valorInput = document.getElementById('valor-comprimento').value;
    const origemSelect = document.getElementById('origem-comprimento');
    const destinoSelect = document.getElementById('destino-comprimento');
    const resultadoSpan = document.getElementById('resultado-comprimento');

    if (valorInput && origemSelect.value && destinoSelect.value) {
        const valor = parseFloat(valorInput);
        const origem = origemSelect.value;
        const destino = destinoSelect.value;
        let resultado;

        switch (origem) {
            case 'metros':
                switch (destino) {
                    case 'centimetros':
                        resultado = valor * 100;
                        break;
                    case 'polegadas':
                        resultado = valor * 39.37;
                        break;
                    case 'metros':
                        resultado = valor;
                        break;
                }
                break;
            case 'centimetros':
                switch (destino) {
                    case 'metros':
                        resultado = valor / 100;
                        break;
                    case 'polegadas':
                        resultado = valor / 2.54;
                        break;
                    case 'centimetros':
                        resultado = valor;
                        break;
                }
                break;
            case 'polegadas':
                switch (destino) {
                    case 'metros':
                        resultado = valor / 39.37;
                        break;
                    case 'centimetros':
                        resultado = valor * 2.54;
                        break;
                    case 'polegadas':
                        resultado = valor;
                        break;
                }
                break;
            default:
                resultado = valor;
        }

        resultadoSpan.textContent = resultado.toFixed(2);


    } else {
        alert('Erro: Preencha todos os campos.');
    }
}

// Função para conversão de peso
function converterPeso(event) {
    event.preventDefault();


    const valorInput = document.getElementById('valor-peso').value;
    const origemSelect = document.getElementById('origem-peso');
    const destinoSelect = document.getElementById('destino-peso');
    const resultadoSpan = document.getElementById('resultado-peso');

    if (valorInput && origemSelect.value && destinoSelect.value) {
        const valor = parseFloat(valorInput);
        const origem = origemSelect.value;
        const destino = destinoSelect.value;
        let resultado;

        switch (origem) {
            case 'quilogramas':
                switch (destino) {
                    case 'gramas':
                        resultado = valor * 1000;
                        break;
                    case 'libras':
                        resultado = valor * 2.20462;
                        break;
                    case 'quilogramas':
                        resultado = valor;
                        break;
                }
                break;
            case 'gramas':
                switch (destino) {
                    case 'quilogramas':
                        resultado = valor / 1000;
                        break;
                    case 'libras':
                        resultado = valor / 453.592;
                        break;
                    case 'gramas':
                        resultado = valor;
                        break;
                }
                break;
            case 'libras':
                switch (destino) {
                    case 'quilogramas':
                        resultado = valor / 2.20462;
                        break;
                    case 'gramas':
                        resultado = valor * 453.592;
                        break;
                    case 'libras':
                        resultado = valor;
                        break;
                }
                break;
            default:
                resultado = valor;
        }

        resultadoSpan.textContent = resultado.toFixed(2);

    } else {
        alert('Erro: Preencha todos os campos.');
    }
}

// Função para conversão de temperatura
function converterTemperatura(event) {
    event.preventDefault();


    const valorInput = document.getElementById('valor-temperatura').value;
    const origemSelect = document.getElementById('origem-temperatura');
    const destinoSelect = document.getElementById('destino-temperatura');
    const resultadoSpan = document.getElementById('resultado-temperatura');

    if (valorInput && origemSelect.value && destinoSelect.value) {
        const valor = parseFloat(valorInput);
        const origem = origemSelect.value;
        const destino = destinoSelect.value;
        let resultado;

        switch (origem) {
            case 'celsius':
                switch (destino) {
                    case 'fahrenheit':
                        resultado = (valor * 9 / 5) + 32;
                        break;
                    case 'kelvin':
                        resultado = valor + 273.15;
                        break;
                    default:
                        resultado = valor;
                }
                break;
            case 'fahrenheit':
                switch (destino) {
                    case 'celsius':
                        resultado = (valor - 32) * 5 / 9;
                        break;
                    case 'kelvin':
                        resultado = (valor + 459.67) * 5 / 9;
                        break;
                    default:
                        resultado = valor;
                }
                break;
            case 'kelvin':
                switch (destino) {
                    case 'celsius':
                        resultado = valor - 273.15;
                        break;
                    case 'fahrenheit':
                        resultado = (valor * 9 / 5) - 459.67;
                        break;
                    default:
                        resultado = valor;
                }
                break;
            default:
                resultado = valor;
        }

        resultadoSpan.textContent = resultado.toFixed(2);

    } else {
        alert('Erro: Preencha todos os campos.');
    }
}

//Captura o evento "change" para alterar dinamicamente as opções
document.addEventListener('change', function () {
    atualizarOpcoes('origem-comprimento', 'destino-comprimento');
    atualizarOpcoes('destino-comprimento', 'origem-comprimento');
    atualizarOpcoes('origem-peso', 'destino-peso');
    atualizarOpcoes('destino-peso', 'origem-peso');
    atualizarOpcoes('origem-temperatura', 'destino-temperatura');
    atualizarOpcoes('destino-temperatura', 'origem-temperatura');
});

// Evento de envio do formulário para a categoria de comprimento
document.getElementById('botao-comprimento').addEventListener('click', converterComprimento);

// Limpa os campos do formulário e o resultado quando ocorrer o evento blur (clicar fora do elemento)
document.getElementById('botao-comprimento').addEventListener('blur', function () {
    document.getElementById('form-comprimento').reset();
    document.getElementById('resultado-comprimento').textContent = "0.00";
});

// Evento de envio do formulário para a categoria de peso
document.getElementById('botao-peso').addEventListener('click', converterPeso);
// Limpa os campos do formulário e o resultatdo quando ocorrer o evento blur (clicar fora do elemento)
document.getElementById('botao-peso').addEventListener('blur', function () {
    document.getElementById('form-peso').reset();
    document.getElementById('resultado-peso').textContent = "0.00";
});

// Evento de envio do formulário para a categoria de temperatura
document.getElementById('botao-temperatura').addEventListener('click', converterTemperatura);
// Limpa os campos do formulário e o resultatdo quando ocorrer o evento blur (clicar fora do elemento)
document.getElementById('botao-temperatura').addEventListener('blur', function () {
    document.getElementById('form-temperatura').reset();
    document.getElementById('resultado-temperatura').textContent = "0.00";
});