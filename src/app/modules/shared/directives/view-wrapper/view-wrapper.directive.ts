import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[cimViewWrapper]'
})
export class ViewWrapperDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.height = '100%';
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.justifyContent = 'center';
    this.el.nativeElement.style.alignItems = 'center';
    this.el.nativeElement.style.flexDirection = 'column';
  }
}
