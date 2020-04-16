import Relogio from './Relogio';

const ponto = document.querySelector('#tempo');
const relogio = new Relogio(25);
relogio.bind(ponto);