import { Component, Input } from "@angular/core";

@Component({
  selector: "product",
  moduleId: module.id,
  template: `<StackLayout>
    <Label [text]="product.name" class="h2" textWrap="true"></Label>
<Label [text]="cant" textWrap="true"></Label>
<Button text="ADD" (tap)="add()"></Button>
<Button  [visibility]="cant > 0 ? 'visible' : 'collapsed'" text="REMOVE" (tap)="remove()"></Button>
</StackLayout>
    
    `
})
export class ProductComponent {

  @Input() product: object;

  cant: number = 0;

  add() {
    this.cant++;
  }

  remove() {
    this.cant--;
  }

}