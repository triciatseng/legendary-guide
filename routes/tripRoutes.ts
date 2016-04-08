import * as express from 'express';
import * as jwt from 'express-jwt';
import {controller} from '../api/TripController';
import {Trip} from '../models/Trip';
import {Food} from '../models/Food';

const ctrl = controller(Trip,Food);
const router = express.Router();
const auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//BASE ROUTE: /api/v1/trips

router.get('/',auth,ctrl.getAll);
router.get('/:id',auth,ctrl.getOne);
router.post('/',auth,ctrl.create);
router.delete('/:id',auth,ctrl.remove);

export = router;
