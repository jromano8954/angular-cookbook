import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    @Output() recipesActive = new EventEmitter<boolean>();
    @Output() shoppingListActive = new EventEmitter<boolean>();;
    recipeStatus = false;
    shoppingListStatus = false;

    onToggleRecipes(){
        //console.log('working');
        this.recipeStatus = !this.recipeStatus;
        this.shoppingListStatus = false;
        this.emitStatuses();
    }
    emitStatuses(){
        this.recipesActive.emit(this.recipeStatus);
        this.shoppingListActive.emit(this.shoppingListStatus);
    }
    onToggleShoppingList(){
        this.shoppingListStatus = !this.shoppingListStatus;
        this.recipeStatus = false;
        this.emitStatuses();
    }


}