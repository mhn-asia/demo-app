import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[content-height]"
})
export class ContentHeightDirective {
  lastValue: string;

  constructor(public ref: ElementRef) { }

  ngOnInit() {
    const nativeElement = this.ref.nativeElement;
    nativeElement.style.height = "1px";
    let count = nativeElement.value.split("\n").length;
    nativeElement.style.height = count * 25 + "px";
  }
}
