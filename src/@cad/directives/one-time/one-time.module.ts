import { NgModule } from "@angular/core";
import { OneTimeDirective } from "@cad/directives/one-time/one-time.directive";

@NgModule({
  declarations: [OneTimeDirective],
  exports: [OneTimeDirective],
})
export class OneTimeModule { }
