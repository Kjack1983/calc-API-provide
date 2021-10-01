import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send('respond with a resource 2');
});

export default router;
