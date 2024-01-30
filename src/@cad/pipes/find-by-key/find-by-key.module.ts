import { NgModule } from '@angular/core';
import { CadFindByKeyPipe } from '@cad/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        CadFindByKeyPipe
    ],
    exports     : [
        CadFindByKeyPipe
    ]
})
export class CadFindByKeyPipeModule
{
}
