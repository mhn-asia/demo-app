import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NcrConfigService {
  constructor() {}

  public changeNcrService(server: string) {
    localStorage.setItem("ncrServer", server);
  }

  getNcrService(): string {
    return localStorage.getItem("ncrServer");
  }

}