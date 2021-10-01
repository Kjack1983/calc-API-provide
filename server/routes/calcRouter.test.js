import chai from 'chai';
import app from '../app';
import sinon from 'sinon';
import request from 'supertest';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
describe('Calculator operations', (req, res, next) => {
    it('/sum/:num1/:num2 Test the addition of two numbers', (done) => {
        const num1 = 1;
        const num2 = 3;
        const sum = num1 + num2;

        chai.request(app).get('/api/sum/:num1/:num2')
        chai.expect(200)
        chai.expect('Content-Type', /json/)
        chai.expect(sum).to.be.a('number')
        chai.expect(sum).to.equal(4);
        done();
    });

    it('/sub/:num1/:num2 Test the subtraction of two numbers', (done) => {
        const num1 = 4;
        const num2 = 3;
        const sub = num1 - num2;

        chai.request(app).get('/api/sub/:num1/:num2')
        chai.expect(200)
        chai.expect('Content-Type', /json/)
        chai.expect(sub).to.be.a('number')
        chai.expect(sub).to.equal(1);
        done();
    });

    it('/mul/:num1/:num2 Test the multiplication of two numbers', (done) => {
        const num1 = 4;
        const num2 = 3;
        const multiplication = num1 * num2;

        chai.request(app).get('/api/sub/:num1/:num2')
        chai.expect(200)
        chai.expect('Content-Type', /json/)
        chai.expect(multiplication).to.be.a('number')
        chai.expect(multiplication).to.equal(12);
        done();
    });

    it('/div/:num1/:num2 Test the multiplication of two numbers', (done) => {
        const num1 = 12;
        const num2 = 3;
        const division = num1 / num2;

        chai.request(app).get('/api/div/:num1/:num2')
        chai.expect(200)
        chai.expect('Content-Type', /json/)
        chai.expect(division).to.be.a('number')
        chai.expect(division).to.equal(4);
        done();
    });
});