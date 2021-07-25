import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPracticeDirective]'
})
export class PracticeDirectiveDirective {

  @HostBinding('style.display') display="block";

  constructor() { }

  @HostListener('click') mouseClick(){
    this.display="none";
  }

}
