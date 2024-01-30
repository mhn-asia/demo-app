import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CadAlertComponent } from '@cad/components/alert/alert.component';

@NgModule({
    declarations: [
        CadAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        CadAlertComponent
    ]
})
export class CadAlertModule
{
}
