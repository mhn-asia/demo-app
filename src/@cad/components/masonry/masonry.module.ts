import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadMasonryComponent } from '@cad/components/masonry/masonry.component';

@NgModule({
    declarations: [
        CadMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CadMasonryComponent
    ]
})
export class CadMasonryModule
{
}
