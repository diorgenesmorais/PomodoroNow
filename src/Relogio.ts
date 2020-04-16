export default class Relogio {
    _minutes: number;
    _segunds: number;
    _ponto: any;
    _pause: boolean = false;
    intervalId: any;

    constructor(start: number) {
        this._minutes = start;
        this._segunds = 60;
    }

    format() {
        const segunds = this._segunds < 10 ? `0${this._segunds.toString()}` : this._segunds.toString();
        const minutes = this._minutes < 10 ? `0${this._minutes.toString()}` : this._minutes;
        return `${minutes}:${segunds}`;
    }

    interrupt() {
        this._pause = !this._pause;
    }

    setMinutes(pulse: number) {
        this._minutes += pulse;
    }

    setSegunds(pulse: number) {
        if(this._segunds === 0) {
            this.setMinutes(pulse);
            this._segunds = 60;
        }
        this._segunds += pulse;
    }

    decrescer() {
        this.setSegunds(-1);
        return this.format();
    }

    bind(ponto: any) {
        this._ponto = ponto;
        this.interrupt();
        if(this._pause) {
            if(this.intervalId) {
                clearInterval(this.intervalId);
            }
            this._minutes--;
            this.intervalId = setInterval(() => {
                this._ponto.innerHTML = this.decrescer();
            }, 1000);
        }
    }
}
