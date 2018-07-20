import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') itemName:ElementRef;
  @ViewChild('amountInput') itemAmount:ElementRef;
  @Output() addShoppingListItem = new EventEmitter<Ingredient>();
  newItem: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    this.newItem = new Ingredient(this.itemName.nativeElement.value,
      this.itemAmount.nativeElement.value); 
    this.addShoppingListItem.emit(this.newItem);
    //console.log(this.newItem.name);
  }

}
