import { NgModule } from '@angular/core';
import { CadScrollbarDirective } from '@cad/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        CadScrollbarDirective
    ],
    exports     : [
        CadScrollbarDirective
    ]
})
export class CadScrollbarModule
{
}
