import * as express from 'express';
import {controller} from '../api/List';
import {List} from '../models/List';
import {Item} from '../models/Item';
import * as jwt from 'express-jwt';

const ctrl = controller(List, Item);
const router = express.Router();
const auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//Base Route: /api/v1/list

//GET: /api/v1/list
router.get('/',ctrl.getAll);

//GET: /api/v1/list/:id
router.get('/:id',ctrl.getOne);

//GET: /api/v1/list/search?query=
router.get('/search',ctrl.search)

//POST: /api/v1/list
router.post('/',ctrl.create);

//PUT: /api/v1/list/:id
router.put('/:id',ctrl.update);

//DELETE: /api/v1/list/:id
router.delete('/:id',ctrl.remove);

export = router;
