/**
 * Created by johannes.leonhard on 08.09.17.
 */
import {
  Component, Input
} from '@angular/core';
@Component({
    selector: 'slideAjaxDiv',
    template: `
    Hello Loading something delecious
    `
})
export class SlideAjaxComponent {
    @Input('url') meta: any;
}
