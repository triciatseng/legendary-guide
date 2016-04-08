import * as express from 'express';
import * as jwt from 'express-jwt';
import {controller} from '../api/FoodController';
import {Food} from '../models/Food';
import {Trip} from '../models/Trip';

const ctrl = controller(Food,Trip);
const router = express.Router();
const auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//BASE ROUTE: '/api/v1/groceries'

router.get('/',auth,ctrl.getAll);
router.get('/:id',auth,ctrl.getOne);
router.post('/',auth,ctrl.create);
router.post('/',auth,ctrl.soloCreate);
router.put('/:id',auth,ctrl.update);
router.delete('/:id',auth,ctrl.remove);
router.delete('/:id',auth,ctrl.soloRemove);

export = router;
