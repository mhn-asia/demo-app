import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CadConfirmationService } from '@cad/services/confirmation/confirmation.service';
import { CadConfirmationDialogComponent } from '@cad/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CadConfirmationDialogComponent,
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule,
    ],
    providers   : [
        CadConfirmationService
    ]
})
export class CadConfirmationModule
{
    /**
     * Constructor
     */
    constructor(){}
}
