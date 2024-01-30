import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FhirConfigService {
  constructor() {}

  public changeFhirService(server: string) {
    localStorage.setItem("fhirServer", server);
  }

  getFhirService(): string {
    return localStorage.getItem("fhirServer");
  }

}
