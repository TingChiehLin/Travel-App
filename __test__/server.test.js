import {app} from '../src/server/server';
const request = require('supertest');

describe("Testing server root", () => {
    it("Return App method is defined", () => {
        expect(app).toBeDefined();
    })
   
    it("Response the GET method", success => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                success();
            });
    });
    it("Response the POST method", async () => {
        const res = await request(app)
            .post('/result')
            .send({
                title: 'Melbourne'
            })
            expect(res.statusCode).toEqual(201);
    }), 
    it('Route to index.html', async () => {
        const res = await request(app)
          .get('/')
          .send('./dist/index.html')
        expect(res.statusCode).toEqual(200);
      })
});