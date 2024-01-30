import { NgModule } from '@angular/core';
import { CadUtilsService } from '@cad/services/utils/utils.service';

@NgModule({
    providers: [
        CadUtilsService
    ]
})
export class CadUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _cadUtilsService: CadUtilsService)
    {
    }
}
