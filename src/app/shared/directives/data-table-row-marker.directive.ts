import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[appDataTableColumn]'
})
export class DataTableColMarkerDirective {
    @Input('appDataTableColumn') boundProperty: string;

    constructor(public templateRef: TemplateRef<any>) { }
}
