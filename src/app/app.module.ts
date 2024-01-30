import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { CoreModule } from "app/core/core.module";
import { AppComponent } from "app/app.component";
import { appRoutes } from "app/app.routing";
import { DemoModule } from "./modules/demo/demo.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: "enabled",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),

    // Core module of your application
    CoreModule,
	
	HttpClientModule,
	RouterModule,
	DemoModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
