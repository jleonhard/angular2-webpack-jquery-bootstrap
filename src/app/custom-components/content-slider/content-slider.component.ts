import { Component, Input, EventEmitter, ViewEncapsulation } from '@angular/core';
import SafeHtmlPipe from './slider-content-pipe';

@Component({
    selector: 'content-slider',
    styleUrls: ['style.css'],
    templateUrl: './content-slider.component.html'
})
export class ContentSliderComponent {
    @Input('playInterval') interval: any = 2000;
        @Input('autoPlay')
        set _autoPlay(b){
        this.autoPlay = b;
        if (b) {
            this.auto(this.interval);
        }
    }
    @Input('slides')
    set _slides(s){
        this.slides = s;
        this.pos = this.slides.length;
        if (this.slides.length) {
            this.slides[0]['classes'] = ['active'];
        }
    }
    public slides: any;
    public autoPlay: boolean = false;
    public pos: number = 0;
    public currentElement: number = 0;
    public intervalTime: number = 1000; // in ms(mili seconds)
    public delayHideSetTimeOutControl: any;
    public backWard (): void {
        if (this.autoPlay) {
            clearInterval(this.interval);
        }
        this.currentElement -= 1;
        if (this.currentElement < 0) {
            this.currentElement = this.pos - 1;
        }
        this.removeClasses();
        let prev = this.currentElement === this.pos - 1 ? 0 : this.currentElement + 1;
        this.slides[prev].classes = ['animateForward'];
        this.show(this.slides[prev]);
        this.show(this.slides[this.currentElement]);
        clearTimeout(this.delayHideSetTimeOutControl);
        this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], 1100);
        this.slides[this.currentElement].classes = ['active', 'backward'];
        if (this.autoPlay) {
            this.auto(this.intervalTime);
        }
    }

    public removeClasses() {
        for ( let i = 0; i < this.pos; i++) {
            this.slides[i].classes = {};
        }
    }
    public forWard() {
        if (this.autoPlay) {
            clearInterval(this.interval);
        }
        this._forWard();
        if (this.autoPlay) {
            this.auto(this.intervalTime);
        }
    }
    private _forWard() {
        this.currentElement += 1;
        if (this.currentElement >= this.pos) {
            this.currentElement = 0;
        }
        this.removeClasses();
        let prev = this.currentElement === 0 ? this.pos - 1 : this.currentElement - 1;
        this.slides[prev]['classes'] = ['animateBack'];
        this.show(this.slides[prev]);
        this.show(this.slides[this.currentElement]);
        clearTimeout(this.delayHideSetTimeOutControl);
        this.delayHideSetTimeOutControl = this.delayHide(this.slides[prev], 1100);
        this.slides[this.currentElement].classes = ['active' , 'forward'];
    }
    private auto(ms) {
        this.autoPlay = true;
        this.intervalTime = ms;
        this.interval = setInterval(this._forWard.bind(this), ms);
    }
    private delayHide(el, ms) {
        return setTimeout(() => el.hidden = true, ms);
    }
    private show(el) {
        el.hidden = false;
    }
}
