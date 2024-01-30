import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[titlecase-input]",
  host: {
    "(input)": "$event",
  },
})
export class TitlecaseInputDirective {
  lastValue: string;

  constructor(public ref: ElementRef) {}

  @HostListener("input", ["$event"]) onInput($event) {
    var start = $event.target.selectionStart;
    var end = $event.target.selectionEnd;
    $event.target.value = this.toTitles($event.target.value);
    $event.target.setSelectionRange(start, end);
    $event.preventDefault();

    if (!this.lastValue || (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)) {
      this.lastValue = this.ref.nativeElement.value = $event.target.value;
      // Propagation
      const evt = document.createEvent("HTMLEvents");
      evt.initEvent("input", false, true);
      event.target.dispatchEvent(evt);
    }
  }

  toTitles(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }
}
