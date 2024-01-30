import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppConfigService {
  put<T>(arg0: string, json: any): import("rxjs").Observable<fhir.r4.Bundle> {
      throw new Error('Method not implemented.');
  }
  get<T>(arg0: string) {
      throw new Error('Method not implemented.');
  }
  constructor() {}

}
