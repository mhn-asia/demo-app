import { ModuleWithProviders, NgModule } from "@angular/core";
import { CadConfigService } from "@cad/services/config/config.service";
import { CAD_APP_CONFIG } from "@cad/services/config/config.constants";
import { FhirConfigService } from "app/fhirconfig.service";
import { NcrConfigService } from "app/ncrconfig.service";
import { environment } from "environments/environment";
import { DreamFactoryConfigService } from "app/dreamfactory.service";

@NgModule()
export class CadConfigModule {
  /**
   * Constructor
   */
  constructor(
    private _cadConfigService: CadConfigService,
    fhirConfigService: FhirConfigService,
    ncrConfigService: NcrConfigService,
    dfConfigService: DreamFactoryConfigService
  ) {
    fhirConfigService.changeFhirService(environment.fhirURL);
    ncrConfigService.changeNcrService(environment.apiURL);
    dfConfigService.changeDFService(environment.dreamfactory.url);
  }

  /**
   * forRoot method for setting user configuration
   *
   * @param config
   */
  static forRoot(config: any): ModuleWithProviders<CadConfigModule> {
    return {
      ngModule: CadConfigModule,
      providers: [
        {
          provide: CAD_APP_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
