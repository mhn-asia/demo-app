import { NgModule } from '@angular/core';
import { CadSplashScreenService } from '@cad/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        CadSplashScreenService
    ]
})
export class CadSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _cadSplashScreenService: CadSplashScreenService)
    {
    }
}
