import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadLoadingInterceptor } from '@cad/services/loading/loading.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: CadLoadingInterceptor,
            multi   : true
        }
    ]
})
export class CadLoadingModule
{
}
