import {AfterContentChecked, AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements AfterViewInit{

  @Input() appTheme = ''

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const native = this.elRef.nativeElement

    native.style.padding = '5px'
    if(this.appTheme === 'dark'){
      native.style.backgroundColor = 'darkgreen'
      native.style.color = 'white'
    }else{
      native.style.backgroundColor = 'lightblue'
    }
    const span = this.renderer.createElement('span');
    this.renderer.appendChild(span, this.renderer.createText(' Hello'));
    this.renderer.appendChild(this.elRef.nativeElement, span);


  }

}
