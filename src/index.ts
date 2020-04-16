import Relogio from './Relogio';

(($) => {
    const ponto: any = $('#tempo');
    const started: any = $('#start');
    const relogio = new Relogio(ponto);
    relogio.bind();
    started.addEventListener('click', () => {
        relogio.interrupt();
    })
})(document.querySelector.bind(document));
