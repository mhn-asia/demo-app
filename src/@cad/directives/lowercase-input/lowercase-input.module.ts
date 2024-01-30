import { NgModule } from '@angular/core';
import { LowercaseInputDirective } from '@cad/directives/lowercase-input/lowercase-input.directive';

@NgModule({
    declarations: [
        LowercaseInputDirective
    ],
    exports     : [
        LowercaseInputDirective
    ]
})
export class LowercaseInputModule
{
}
