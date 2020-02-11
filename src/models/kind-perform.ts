export class KindPerform {
    public name: string
    public price: number
    public additional_price: number;
    public max_person: number;

    constructor(name: string, price: number, additional_price: number, max_person: number) {
        this.name = name;
        this.price = price;
        this.additional_price = additional_price;
        this.max_person = max_person;
    }
}