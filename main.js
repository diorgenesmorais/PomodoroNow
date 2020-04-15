(($) => {
    let minuto = 25;
    let segundo = 1;
    let tempo = $('#tempo');
    $('#start').addEventListener('click', play);
    function play() {
        if(minuto > 0 || segundo > 0){
            if(segundo === 0) {
                segundo = 59;
                minuto--;
            } else {
                segundo--;
            }
            tempo.innerHTML = `${minuto}:${segundo}`;
            setTimeout(() => {
                play()}, 1000);
        } else {
            tempo.innerHTML = "00:00";
        }
    }
})(document.querySelector.bind(document));