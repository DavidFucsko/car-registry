import { Directive, EventEmitter, Output, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appDataTableColumn]'
})
export class DataTableColMarkerDirective {

    @Output()
    clicked: EventEmitter<any> = new EventEmitter<any>();

    constructor(public templateRef: TemplateRef<any>) {
        this.clicked.emit('hello');
    }
}
