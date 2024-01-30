import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadCardComponent } from '@cad/components/card/card.component';

@NgModule({
    declarations: [
        CadCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CadCardComponent
    ]
})
export class CadCardModule
{
}
