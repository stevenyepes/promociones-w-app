

export class Product {
    constructor( public id: number, public brand: string, public description: string, public image: string, public price: number, public priceWithDiscount?: number) {}
}