
const request = require('supertest');
const db = require('../config/db')
const app = require('../routes/event');


  beforeAll( async () =>  await db.connectDB())
  afterEach( async () => await db.clearDatabase)
  afterAll( async ()  => await db.closeDatabase)

describe("GET Endpoints", () => {
it('Endpoint should return list of events',  () => {
  request(app)
  .get("/view/events")
  .then( response =>{
    expect(response.statusCode).toBe(200)
    expect(response.body).not.toHaveProperty('isError', true)
    done()
  
  })
  
  })
  it('GET Event by id and return object', async () => {
     request(app)
    .get("/view/event/:id")
    .then( response => {
      expect(response.statusCode).toBe(200)
      expect(response.body).not.toHaveProperty('isError', true)
    })

  })
});

