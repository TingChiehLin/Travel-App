import app from '../src/server/server';

const request = require('supertest');

beforeAll(done => {
    done()
})
  
describe("Testing server root", () => {
    test("Return App method is defined", (done) => {
        expect(app).toBeDefined();
        done();
    })
});

describe("GET Method", () => {
    it('should return a 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});

describe('post /api/v1/pets', () => {
    test("Response the POST method", async () => {
        const res = await request(app)
            .post('/result')
            .send({
                title: 'Melbourne'
            })
            expect(res.statusCode).toEqual(201);
    });
});

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    // app.connection.close()
    done()
})