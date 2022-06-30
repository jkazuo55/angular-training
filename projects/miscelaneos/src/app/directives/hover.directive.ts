import { Directive,ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef) { 
    console.log("directive called");
    // el.nativeElement.style.backgroundColor='yellow'
  }

  @Input("appHover") newColor!:string;

  @HostListener('mouseenter') mouseEnter(){
    this.hover(this.newColor||'yellow')
    // this.el.nativeElement.style.backgroundColor='yellow'
  }
  @HostListener('mouseleave') mouseOut(){
    this.hover("")
    // this.el.nativeElement.style.backgroundColor=null;
  }

  private hover(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }

}
