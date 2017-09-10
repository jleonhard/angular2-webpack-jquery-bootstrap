import {
  Component, ViewEncapsulation
} from '@angular/core';
import ContentSliderComponent from './content-slider.component';

@Component({
    selector: 'ImageShowComponent',
    template: `
        <content-slider [slides]="images"></content-slider>
    `,
    encapsulation: ViewEncapsulation.None
})
export class ImageShowComponent {
    public images: any[] = [{sType: 'img', imgSrc: './assets/img/tr500.jpg'},
        { sType : 'div', content : '...Hello It is a slidable content'}];

}
