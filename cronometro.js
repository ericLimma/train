var cronometro;
var tempoTotal = 0;

function iniciarCronometro() {
    cronometro = setInterval(atualizarCronometro, 1000);
}

function atualizarCronometro() {
    tempoTotal++;
    var horas = Math.floor(tempoTotal / 3600);
    var minutos = Math.floor((tempoTotal % 3600) / 60);
    var segundos = tempoTotal % 60;

    document.getElementById("tempo").textContent = formatarTempo(horas) + ":" + formatarTempo(minutos) + ":" + formatarTempo(segundos);
}

function formatarTempo(tempo) {
    return tempo < 10 ? "0" + tempo : tempo;
}

function pausarCronometro() {
    clearInterval(cronometro);
}

function pararCronometro() {
    clearInterval(cronometro);
    tempoTotal = 0;
    document.getElementById("tempo").textContent = "00:00:00";
}