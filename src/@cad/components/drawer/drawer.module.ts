import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadDrawerComponent } from '@cad/components/drawer/drawer.component';

@NgModule({
    declarations: [
        CadDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        CadDrawerComponent
    ]
})
export class CadDrawerModule
{
}
