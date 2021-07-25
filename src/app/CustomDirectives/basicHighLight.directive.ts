import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appbasicHighlight]'
})
export class basicHighLight implements OnInit{
    constructor(private elementRef:ElementRef){

    }

    ngOnInit(){
        this.elementRef.nativeElement.style.background="green";
    }
}