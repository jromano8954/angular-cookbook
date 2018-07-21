import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective{
    @HostBinding('class.open') isClicked:boolean = false; 
    @HostListener('click') onClick(){
        this.isClicked = !this.isClicked;
    }

}