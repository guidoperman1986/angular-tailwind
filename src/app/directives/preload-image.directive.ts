import {
    Directive,
    Input,
    HostBinding,
    HostListener,
    Renderer2,
    ElementRef,
  } from '@angular/core';
  
  @Directive({
    selector: '[libImgFallback]',
  })
  export class FallbackImgDirective {
    constructor(private renderer2: Renderer2, private el: ElementRef) {}
  
    @Input()
    @HostBinding('src')
    src!: string;
  
    @Input() libImgFallback!: string;
  
    @HostListener('error')
    onError() {
      this.src = this.libImgFallback;
      this.renderer2.addClass(this.el.nativeElement, 'error-image');
    }
  }
  