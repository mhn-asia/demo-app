import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CadConfirmationConfig } from '@cad/services/confirmation/confirmation.types';

@Component({
    selector: 'cad-confirmation-dialog',
    templateUrl: './dialog.component.html',
    styles: [
        /* language=SCSS */
        `
            .cad-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-dialog-container {
                    padding: 0 !important;
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CadConfirmationDialogComponent implements OnInit {
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: CadConfirmationConfig,
        public matDialogRef: MatDialogRef<CadConfirmationDialogComponent>,
		private _changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {}
	
	ngAfterContentInit(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    
	close(): void {
        // console.log("mimi")
        this.matDialogRef.close(true);
    }
}
