import * as express from 'express';
import {controller} from '../api/Item';
import {Item} from '../models/Item';

const ctrl = controller(Item);
const router = express.Router();

//Base Route: /api/v1/food

//GET: /api/v1/food
router.get('/',ctrl.getAll);

//GET: /api/v1/food/:id
router.get('/:id',ctrl.getOne);

//GET: /api/v1/food/search?query=
router.get('/search',ctrl.search)

//POST: /api/v1/food
router.post('/',ctrl.create);

//PUT: /api/v1/food/:id
router.put('/:id',ctrl.update);

//DELETE: /api/v1/food/:id
router.delete('/:id',ctrl.remove);

export = router;
