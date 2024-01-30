import { NgModule } from '@angular/core';
import { CadScrollResetDirective } from '@cad/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        CadScrollResetDirective
    ],
    exports     : [
        CadScrollResetDirective
    ]
})
export class CadScrollResetModule
{
}
