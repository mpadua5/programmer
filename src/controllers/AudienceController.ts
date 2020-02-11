import { Audience } from '../models/index'

export const AudienceController = {
    getAudience: (req, res) => {
        console.info("\nProcessing: getAudience");
        return res.send(Audience);
    },
    postAudienceCost: (req, res) => {
        console.log("\nProcessing: postAudienceCost");

        let cost = null;
        if (req.body.length == undefined) 
            cost = findPerformance(req.body);
        else {
            cost = [];
            req.body.forEach(audience => {
                cost.push(findPerformance(audience));
            });
        }

        if (!cost)
            return res.status(400).send("Não foi encontrado nenhuma apresentação");
        else
            return res.status(200).send(cost);
    }
}

function findPerformance(body) {
    let { performance, persons } = body;
    let cost = Audience.find((perform) => { return perform.name === performance });

    let additional_people = persons > cost.type.max_person ? persons - cost.type.max_person : 0;
    let additional_value = additional_people > 0 ? cost.type.additional_price * additional_people : 0;
    return {
        "performance": cost.name,
        "kind": cost.type.name,    
        "price": cost.type.price,
        "max_persons": cost.type.max_person,
        "persons": persons,
        "additional_people": additional_people,
        "people_additional_value": cost.type.additional_price,
        "additional_value": additional_value,
        "total": cost.type.price + additional_value
    }
}
