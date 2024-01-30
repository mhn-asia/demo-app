import { NgModule } from '@angular/core';
import { DebounceClickDirective } from '@cad/directives/debounce-click/debounce-click.directive';

@NgModule({
    declarations: [
        DebounceClickDirective
    ],
    exports: [
        DebounceClickDirective
    ]
})
export class DebounceClickModule {
}
