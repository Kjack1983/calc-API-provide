import express from 'express';
import bodyParser from 'body-parser';

const calcRouter = express.Router();
calcRouter.use(bodyParser.json());

calcRouter.get('/sum/:num1/:num2', (req, res, next) => {
    let {num1, num2} = req.params;
    const sum = Number(num1) + Number(num2);

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

calcRouter.get('/sub/:num1/:num2', (req, res, next) => {
    let {num1, num2} = req.params;
    const subtraction = Number(num1) - Number(num2);

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

calcRouter.get('/mul/:num1/:num2', (req, res, next) => {
    let {num1, num2} = req.params;
    const multiplication = Number(num1) * Number(num2);

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

calcRouter.get('/div/:num1/:num2', (req, res, next) => {
    let {num1, num2} = req.params;
    const division = Number(num1) / Number(num2);

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