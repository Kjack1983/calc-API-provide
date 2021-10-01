import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('New Express Site 1');
});

export default router;
