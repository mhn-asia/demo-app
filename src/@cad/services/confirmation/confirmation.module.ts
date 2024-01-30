import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CadConfirmationService } from '@cad/services/confirmation/confirmation.service';
import { CadConfirmationDialogComponent } from '@cad/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';
import {
	IgxComboModule
} from "@infragistics/igniteui-angular";

// import { LaboratoryTestConfirmationDialogComponent } from 'app/modules/provider/patient/order-management/lab/dialog/dialog.component';
// import { EncounterQueueConfirmationDialogComponent } from 'app/modules/provider/encounter-queue/dialog/dialog.component';
// import { LaboratoryConsoleConfirmationDialogComponent } from 'app/modules/provider/laboratory-console/dialog/dialog.component';
// import { AppointmentCancelConfirmationDialogComponent } from 'app/modules/provider/appointment/dialog/dialog.component';
@NgModule({
    declarations: [
        CadConfirmationDialogComponent,
		// LaboratoryTestConfirmationDialogComponent,
        // EncounterQueueConfirmationDialogComponent,
        // LaboratoryConsoleConfirmationDialogComponent,
        // AppointmentCancelConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule,
		IgxComboModule
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
    constructor(private _cadConfirmationService: CadConfirmationService)
    {
    }
}
