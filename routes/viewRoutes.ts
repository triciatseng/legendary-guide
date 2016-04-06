import * as express from 'express';
const router = express.Router();

router.get('/:name',(req,res,next) => {
  res.render('templates/' + req.params.name);
});

export = router;
