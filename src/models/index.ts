import { TheatricalPerform } from "./theatrical-perform"
import { KindPerform } from "./kind-perform"

export const Kind = {
    "tragedy": new KindPerform("tragedy", 40000, 1000, 30),
    "comedy": new KindPerform("comedy", 30000, 500, 20)
}

export const Audience = [
    new TheatricalPerform("hamlet", Kind.tragedy),
    new TheatricalPerform("as-like", Kind.comedy),
    new TheatricalPerform("othello", Kind.tragedy)
]