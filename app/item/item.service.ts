import { Injectable } from "@angular/core";

@Injectable()
export class ItemService {
    private fake_products = [
        { name: "Pizza" },
        { name: "Burguer" },
        { name: "Salad" },
        { name: "Rice" },
        { name: "Apple" },
        { name: "Vegetable" },
        { name: "Mandarin" },
        { name: "Beer" },
        { name: "Melon" },
        { name: "Fish" },
        { name: "Meat" },
        { name: "Ron" }
    ];

    getItems(): object[] {
        return this.fake_products;
    }
}
