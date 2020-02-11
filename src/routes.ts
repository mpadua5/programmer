import * as express from 'express';
import { AudienceController, KindController } from './controllers';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Routes ok');
});

router.get('/audiences', AudienceController.getAudience);
router.post('/audiences/cost', AudienceController.postAudienceCost);
router.get('/kinds', KindController.getKindPerform);

export = router;