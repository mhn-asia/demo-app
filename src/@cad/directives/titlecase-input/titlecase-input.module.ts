import { NgModule } from '@angular/core';
import { TitlecaseInputDirective } from '@cad/directives/titlecase-input/titlecase-input.directive';

@NgModule({
    declarations: [
        TitlecaseInputDirective
    ],
    exports     : [
        TitlecaseInputDirective
    ]
})
export class TitlecaseInputModule
{
}
