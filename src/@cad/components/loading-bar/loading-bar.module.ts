import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CadLoadingBarComponent } from '@cad/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        CadLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        CadLoadingBarComponent
    ]
})
export class CadLoadingBarModule
{
}
