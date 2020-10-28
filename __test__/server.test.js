import {app} from '../src/server/server';
const request = require('supertest');

describe("Testing server root", () => {
    it("Return App method is defined", () => {
        expect(app).toBeDefined();
    })
   
    it("Response the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
    it("Response the POST method", async (done) => {
        const res = await request(app)
            .post('/result')
            .send({
                title: 'Melbourne'
            })
            expect(res.statusCode).toEqual(201);
            done();
    }), 
    it('Route to index.html', async () => {
        const res = await request(app)
          .get('/')
          .send('./dist/index.html')
        expect(res.statusCode).toEqual(200);
        done();
    })
});

// afterAll(async done => {
//     // Closing the DB connection allows Jest to exit successfully.
//     dbConnection.close();
//     done();
// });