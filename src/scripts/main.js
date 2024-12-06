AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();  // Correção aqui

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS =  1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
    const HorasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${HorasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (diasAteOEvento < 0){
        clearInterval(contaAsHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);
