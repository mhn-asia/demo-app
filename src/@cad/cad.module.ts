import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CadConfirmationModule } from '@cad/services/confirmation';
import { CadLoadingModule } from '@cad/services/loading';
import { CadMediaWatcherModule } from '@cad/services/media-watcher/media-watcher.module';
import { CadSplashScreenModule } from '@cad/services/splash-screen/splash-screen.module';
import { CadUtilsModule } from '@cad/services/utils/utils.module';

@NgModule({
    imports  : [
        CadConfirmationModule,
        CadLoadingModule,
        CadMediaWatcherModule,
        CadSplashScreenModule,
        CadUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class CadModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: CadModule)
    {
        if ( parentModule )
        {
            throw new Error('CadModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
