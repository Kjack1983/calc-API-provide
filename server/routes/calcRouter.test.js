import chai from 'chai';
const { expect } = chai;
const should = chai.should();
import app from '../app';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

describe('Calculator operations', () => {
    it('/sum/:num1/:num2 Test the addition of two numbers', (done) => {
        chai.request(app)
        .get('/api/sum/2/3')
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.should.to.be.json;
            expect(res.body).to.be.a('object');
            
            const { 
                body: { sum } 
            } = res;

            const actual = sum;
            const expected = 5;
            expect(actual).to.be.a('number');

            // Asserts that the target is a number, and isn’t NaN or positive/negative Infinity
            expect(actual).to.be.finite;
            expect(expected).to.be.a('number');
            expect(expected).to.be.finite;
            expect(actual).to.be.equal(expected);
            done();
        })
        
    })
    
    it('/sub/:num1/:num2 Test the subtraction of two numbers', (done) => {
        chai.request(app)
        .get('/api/sub/5/3')
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.should.to.be.json;
            expect(res.body).to.be.a('object');

            const { 
                body: { subtraction } 
            } = res;

            const actual = subtraction;
            const expected = 2;
            
            // Asserts that the target is a number, and isn’t NaN or positive/negative Infinity
            expect(actual).to.be.finite;
            expect(expected).to.be.a('number');
            expect(expected).to.be.finite;
            expect(actual).to.be.equal(expected);
            done();
        })
    });

    it('/mul/:num1/:num2 Test the multiplication of two numbers', (done) => {
        chai.request(app)
        .get('/api/mul/5/3')
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.should.to.be.json;
            expect(res.body).to.be.a('object');

            const { 
                body: { multiplication } 
            } = res;

            const actual = multiplication;
            const expected = 15;

            // Asserts that the target is a number, and isn’t NaN or positive/negative Infinity
            expect(actual).to.be.finite;
            expect(expected).to.be.a('number');
            expect(expected).to.be.finite;
            expect(actual).to.be.equal(expected);
            done();
        });
    });

    it('/div/:num1/:num2 Test the multiplication of two numbers', (done) => {
        chai.request(app)
        .get('/api/div/15/3')
        .end((err, res) => {
            if(err) done(err);
            res.should.have.status(200);
            res.should.to.be.json;
            expect(res.body).to.be.a('object');

            const { 
                body: { division } 
            } = res;

            const actual = division;
            const expected = 5;
            
            // Asserts that the target is a number, and isn’t NaN or positive/negative Infinity
            expect(actual).to.be.finite;
            expect(expected).to.be.a('number');
            expect(expected).to.be.finite;
            expect(actual).to.be.equal(expected);
            done();
        });
    });
});