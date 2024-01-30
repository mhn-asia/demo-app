import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { merge } from "lodash-es";
import { CadConfirmationDialogComponent } from "@cad/services/confirmation/dialog/dialog.component";
import { CadConfirmationConfig } from "@cad/services/confirmation/confirmation.types";
// import { LaboratoryTestConfirmationDialogComponent } from "app/modules/provider/patient/order-management/lab/dialog/dialog.component";
// import { EncounterQueueConfirmationDialogComponent } from 'app/modules/provider/encounter-queue/dialog/dialog.component';
// import { LaboratoryConsoleConfirmationDialogComponent } from 'app/modules/provider/laboratory-console/dialog/dialog.component';
// import { AppointmentCancelConfirmationDialogComponent } from 'app/modules/provider/appointment/dialog/dialog.component';

@Injectable()
export class CadConfirmationService {
  private _defaultConfig: CadConfirmationConfig = {
    title: "Confirm action",
    message: "Are you sure you want to confirm this action?",
    icon: {
      show: true,
      name: "heroicons_outline:exclamation",
      color: "warn",
    },
    actions: {
      confirm: {
        show: true,
        label: "Confirm",
        color: "warn",
      },
      cancel: {
        show: true,
        label: "Cancel",
      },
      back: {
        show: false,
        label: "Back",
      },
    },
    dismissible: false,
  };

  private _defaultConfig2: CadConfirmationConfig = {
    title: "Confirm action",
    message: "Are you sure you want to confirm this action?",
    icon: {
      show: true,
      name: "heroicons_outline:exclamation",
      color: "warn",
    },
    actions: {
      confirm: {
        show: true,
        label: "Confirm",
        color: "warn",
      },
      cancel: {
        show: false,
        label: "Cancel",
      },
      back: {
        show: false,
        label: "Back",
      },
    },
    dismissible: false,
  };

  private _defaultConfig3: CadConfirmationConfig = {
    title: "Confirm action",
    message: "Are you sure you want to confirm this action?",
    icon: {
      show: true,
      name: "heroicons_outline:exclamation",
      color: "warn",
    },
    actions: {
      confirm: {
        show: true,
        label: "Confirm",
        color: "warn",
      },
      cancel: {
        show: true,
        label: "Cancel",
      },
      back: {
        show: true,
        label: "Back",
      },
    },
    dismissible: false,
  };
  
  private _defaultConfig4: CadConfirmationConfig = {
    title: "Confirm action",
    message: "Are you sure you want to confirm this action?",
    icon: {
      show: true,
      name: "heroicons_outline:exclamation",
      color: "warn",
    },
    actions: {
      confirm: {
        show: true,
        label: "Confirm",
        color: "warn",
      },
      cancel: {
        show: true,
        label: "Cancel",
      },
      back: {
        show: false,
        label: "Back",
      },
    },
	body: {
		component: "combobox"
	},
    dismissible: false,
  };

  private _defaultConfig5: CadConfirmationConfig = {
    title: "Confirm action",
    message: "Are you sure you want to confirm this action?",
    icon: {
      show: true,
      name: "heroicons_outline:exclamation",
      color: "warn",
    },
    actions: {
      confirm: {
        show: true,
        label: "Confirm",
        color: "warn",
      },
      cancel: {
        show: true,
        label: "Cancel",
      },
      back: {
        show: false,
        label: "Back",
      },
    },
	body: {
		component: "inputText"
	},
    dismissible: false,
  };
  /**
   * Constructor
   */
  constructor(private _matDialog: MatDialog) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  open(config: CadConfirmationConfig = {}): MatDialogRef<CadConfirmationDialogComponent> {
    // Merge the user config with the default config
    const userConfig = merge({}, this._defaultConfig, config);

    // Open the dialog
    return this._matDialog.open(CadConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !userConfig.dismissible,
      data: userConfig,
      panelClass: "cad-confirmation-dialog-panel",
    });
  }

  openConfirm(config: CadConfirmationConfig = {}): MatDialogRef<CadConfirmationDialogComponent> {
    // Merge the user config with the default config
    const userConfig = merge({}, this._defaultConfig2, config);

    // Open the dialog
    return this._matDialog.open(CadConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !userConfig.dismissible,
      data: userConfig,
      panelClass: "cad-confirmation-dialog-panel",
    });
  }

  openDialog(config: CadConfirmationConfig = {}): MatDialogRef<CadConfirmationDialogComponent> {
    // Merge the user config with the default config
    const userConfig = merge({}, this._defaultConfig3, config);

    // Open the dialog
    return this._matDialog.open(CadConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !userConfig.dismissible,
      data: userConfig,
      panelClass: "cad-confirmation-dialog-panel",
    });
  }
  
//   /**
//   * Only for Laboratory Test Page
//   * Has combobox in the dialog
//   **/
//   openLaboratoryTestDialog(config: CadConfirmationConfig = {}): MatDialogRef<LaboratoryTestConfirmationDialogComponent> {
//     // Merge the user config with the default config
//     const userConfig = merge({}, this._defaultConfig4, config);

//     // Open the dialog and bind to lab test confirmation dialog component
//     return this._matDialog.open(LaboratoryTestConfirmationDialogComponent, {
//       autoFocus: false,
//       disableClose: !userConfig.dismissible,
//       data: userConfig,
//       panelClass: "cad-confirmation-dialog-panel",
//     });
//   }

//   /**
//   * Only for Encounter Page
//   * Has combobox in the dialog
//   **/
//   openEndEncounterDialog(config: CadConfirmationConfig = {}): MatDialogRef<EncounterQueueConfirmationDialogComponent> {
//     // Merge the user config with the default config
//     const userConfig = merge({}, this._defaultConfig4, config);

//     // Open the dialog and bind to Encounter confirmation dialog component
//     return this._matDialog.open(EncounterQueueConfirmationDialogComponent, {
//       autoFocus: false,
//       disableClose: !userConfig.dismissible,
//       data: userConfig,
//       panelClass: "cad-confirmation-dialog-panel",
//     });
//   }

//   openVCEndEncounterDialog(config: CadConfirmationConfig = {}): MatDialogRef<EncounterQueueConfirmationDialogComponent> {
//     // Merge the user config with the default config
//     const userConfig = merge({}, this._defaultConfig4, config);

//     // Open the dialog and bind to Encounter confirmation dialog component
//     return this._matDialog.open(EncounterQueueConfirmationDialogComponent, {
//       autoFocus: false,
//       disableClose: !userConfig.dismissible,
//       data: userConfig,
//       panelClass: "cad-confirmation-dialog-panel",
//     });
//   }

//   openDialogLabConsole(config: CadConfirmationConfig = {}): MatDialogRef<LaboratoryConsoleConfirmationDialogComponent> {
//     // Merge the user config with the default config
//     const userConfig = merge({}, this._defaultConfig4, config);

//     // Open the dialog and bind to Encounter confirmation dialog component
//     return this._matDialog.open(LaboratoryConsoleConfirmationDialogComponent, {
//       autoFocus: false,
//       disableClose: !userConfig.dismissible,
//       data: userConfig,
//       panelClass: "cad-confirmation-dialog-panel",
//     });
//   }

//   openAppointmentCancelDialog(config: CadConfirmationConfig = {}): MatDialogRef<AppointmentCancelConfirmationDialogComponent> {
//     // Merge the user config with the default config
//     const userConfig = merge({}, this._defaultConfig5, config);

//     // Open the dialog and bind to Encounter confirmation dialog component
//     return this._matDialog.open(AppointmentCancelConfirmationDialogComponent, {
//       autoFocus: false,
//       disableClose: !userConfig.dismissible,
//       data: userConfig,
//       panelClass: "cad-confirmation-dialog-panel",
//     });
//   }
}
