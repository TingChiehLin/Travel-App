import app from '../src/server/server';
import {handleServerClose} from '../src/server/server';
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

// afterEach(async () => {
//     await app.close();
// });

// afterAll(async () => {
// // await new Promise(resolve => setTimeout(() => resolve(), 1000));
// await handleServerClose();
// });