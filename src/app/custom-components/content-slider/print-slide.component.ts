import {
  Component, Input
} from '@angular/core';
import SlideAjaxDiv from './slider-ajax.component';
@Component({
    selector: 'printSlide',
    template: `
        <div *ngIf="meta.sType=='div'" [innerHtml]="meta.content | safeHtml">

        </div>
        <div *ngIf="meta.sType=='ajaxDiv'">
            <slideAjaxDiv [url]="meta.contentUrl"></slideAjaxDiv>
        </div>
        <img [src]="meta.imgSrc" *ngIf="meta.sType=='img'" />
    `
})
export class PrintslideComponent {
    @Input('meta') meta: any;
    constructor() {

    }
}