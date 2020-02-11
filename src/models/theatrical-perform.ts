import { KindPerform } from "./kind-perform";

export class TheatricalPerform {
    name: string;
    type: KindPerform;

    constructor(name: string, type: KindPerform) {
        this.name = name;
        this.type = type;
    }
}