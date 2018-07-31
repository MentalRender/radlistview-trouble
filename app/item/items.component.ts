import { Component } from "@angular/core";
import { ItemService } from "./item.service";
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    private _dataItems: ObservableArray<any>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this._dataItems = new ObservableArray(this.itemService.getItems());
    }

    get dataItems(): ObservableArray<any> {
        return this._dataItems;
    }

}