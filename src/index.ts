import Relogio from './Relogio';

(($) => {
    const ponto: any = $('#tempo');
    const started: any = $('#start');
    const reiniciar: any = $('#reiniciar');
    const relogio = new Relogio(ponto);
    relogio.bind();
    started.addEventListener('click', () => relogio.interrupt());
    reiniciar.addEventListener('click', () => relogio.reiniciar());
})(document.querySelector.bind(document));
