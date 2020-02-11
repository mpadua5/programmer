import { Kind } from '../models';

export const KindController = {
    getKindPerform: (req, res) => {
        console.info("\nProcessing: getKindPerform");
        return res.status(200).send(JSON.stringify(Kind));
    }
}