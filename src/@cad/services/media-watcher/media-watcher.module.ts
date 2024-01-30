import { NgModule } from '@angular/core';
import { CadMediaWatcherService } from '@cad/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        CadMediaWatcherService
    ]
})
export class CadMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _cadMediaWatcherService: CadMediaWatcherService)
    {
    }
}
