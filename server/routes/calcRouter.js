import express from 'express';
import bodyParser from 'body-parser';

const calcRouter = express.Router();
calcRouter.use(bodyParser.json());

calcRouter.get('/sum/:leftoperand/:rightoperand', (req, res, next) => {
    let {leftoperand, rightoperand} = req.params;
    const sum = Number(leftoperand) + Number(rightoperand);

    // Cheking .
    if (isNaN(sum)) {
         // not supported.
         return res.status(403).send({
             status: 'failed',
             message: 'Operation is not supported params are not numbers'
        })
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({sum});
    next();
});

calcRouter.get('/sub/:leftoperand/:rightoperand', (req, res, next) => {
    let {leftoperand, rightoperand} = req.params;
    const subtraction = Number(leftoperand) - Number(rightoperand);

    // Cheking .
    if (isNaN(subtraction)) {
         // not supported.
         return res.status(403).send({
             status: 'failed', 
             message: 'Operation is not supported params are not numbers'
        })
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({subtraction});
    next();
});

calcRouter.get('/mul/:leftoperand/:rightoperand', (req, res, next) => {
    let {leftoperand, rightoperand} = req.params;
    const multiplication = Number(leftoperand) * Number(rightoperand);

    // Cheking .
    if (isNaN(multiplication)) {
         // not supported.
         return res.status(403).send({
             status: 'failed', 
             message: 'Operation is not supported params are not numbers'
        })
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({multiplication});
    next();
});

calcRouter.get('/div/:leftoperand/:rightoperand', (req, res, next) => {
    let {leftoperand, rightoperand} = req.params;
    const division = Number(leftoperand) / Number(rightoperand);

    // Cheking .
    if (isNaN(division)) {
         // not supported.
         return res.status(403).send({
             status: 'failed', 
             message: 'Operation is not supported params are not numbers'
        })
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({division});
    next();
});

export default calcRouter;