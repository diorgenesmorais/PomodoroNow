export default class Relogio {
    private readonly START: number = 25;
    private readonly PAUSE: number = 5;
    private _minutes: number;
    private _segunds: number;
    private _ponto: any;
    private _pause: boolean = false;
    private intervalId: any;
    private _showMinutes: string = '00';
    private _showSegunds: string = '00';

    constructor(ponto: any) {
        this._minutes = this.START;
        this._segunds = 60;
        this._ponto = ponto;
    }

    format() {
        if(this._segunds === 60) {
            this._showSegunds = '00';
        } else {
            this._showSegunds = this._segunds < 10 ? `0${this._segunds.toString()}` : this._segunds.toString();
        }
         this._showMinutes = this._minutes < 10 ? `0${this._minutes.toString()}` : this._minutes.toString();
        return `${this._showMinutes}:${this._showSegunds}`;
    }

    interrupt() {
        this._pause = !this._pause;
        if(this._pause) {
            this.stop();
        } else {
            this.start();
        }
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

    start() {
        if(this._minutes === this.START || this._minutes === this.PAUSE){
            this.setMinutes(-1);
        }
        this.intervalId = setInterval(() => {
            this._ponto.innerHTML = this.decrescer();
        }, 1000);
    }

    stop() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    reiniciar() {
        this.stop();
        this._minutes = this.START;
        this._segunds = 60;
        this._ponto.innerHTML = this.format();
    }

    bind() {
        this.interrupt();
    }
}
