import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadHighlightComponent } from '@cad/components/highlight/highlight.component';

@NgModule({
    declarations: [
        CadHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CadHighlightComponent
    ]
})
export class CadHighlightModule
{
}
