import { NgModule } from '@angular/core';
import { UppercaseInputDirective } from '@cad/directives/uppercase-input/uppercase-input.directive';

@NgModule({
    declarations: [
        UppercaseInputDirective
    ],
    exports     : [
        UppercaseInputDirective
    ]
})
export class UppercaseInputModule
{
}
