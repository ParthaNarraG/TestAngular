import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
}
  from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit {

  @HostBinding ('style.color') color="red";

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.element.nativeElement,'color','red');
  }

  @HostListener('mouseenter') mouseOver() {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    this.color="red";
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'green');
    this.color="green";
  }
}
