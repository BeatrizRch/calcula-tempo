
function calcularTempo() {
    const inicio = document.getElementById("inicio").value;
    const fim = document.getElementById("fim").value;
    const resultado = document.getElementById("resultado");

    if (!inicio || !fim) {
        resultado.innerHTML = `
            <h2>Atenção!</h2>
            <p>Preencha as duas datas.</p>
        `;
        return;
    }

    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);

    const diferenca = dataFim - dataInicio;

    if (diferenca < 0) {
        resultado.innerHTML = `
            <h2>Data inválida</h2>
            <p>A data final deve ser posterior à inicial.</p>
        `;
        return;
    }

    const segundosTotais = Math.floor(diferenca / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);

    const dias = Math.floor(horasTotais / 24);
    const horas = horasTotais % 24;
    const minutos = minutosTotais % 60;
    const segundos = segundosTotais % 60;

    resultado.innerHTML = `
        <h2>Resultado do cálculo</h2>

        <p class="valor">${dias} dias</p>
        <p>${horas} horas, ${minutos} minutos e ${segundos} segundos</p>

        <hr style="margin: 15px 0;">

        <p><strong>Total em horas:</strong> ${(
            diferenca / 3600000
        ).toFixed(2)} horas</p>

        <p><strong>Total em minutos:</strong> ${minutosTotais} minutos</p>

        <p><strong>Total em segundos:</strong> ${segundosTotais} segundos</p>
    `;
}

function limpar() {
    document.getElementById("inicio").value = "";
    document.getElementById("fim").value = "";

    document.getElementById("resultado").innerHTML = `
        <h2>Resultado</h2>
        <p>Informe as datas para começar.</p>
    `;
}
