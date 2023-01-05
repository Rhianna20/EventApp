
const supertest = require('supertest');

const app = require('../app')

jest.useFakeTimers();




  beforeAll(() =>  app.connectDB)
  afterEach(() => app.clearDatabase)
  afterAll(()  => app.closeDatabase)

describe("GET /view/events  Endpoints", () => {
it('Return json containing list of all events', async () => {

 await supertest(app)
 .get("/view/events")
 .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
  })
});

describe("'GET /view/event/:id", () => {
  it("Return a json object by its id", async () => 
await supertest(app).get("/view/event/:id")
.expect(200)
    )
 
})

describe("POST /create/event", () => {
  it("Save event to database", async () => {
  const response = await supertest(app)
  .post("/create/event")
  .set('Accept', 'application/json')
  .send({ 
    event_name: "popping jules",
    location: "Hackney",
    date: "10-02-25",
    genre: "Pop",
    price: 100,
    created_by: "Rhi be"

})
  expect(response.statusCode).toBe(200) 
  expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
  expect(response.body.event_name).toBeDefined()
  expect(response.body.location).toBeDefined()
  expect(response.body.date).toBeDefined()
  expect(response.body.genre).toBeDefined()
  expect(response.body.price).toBeDefined()
  expect(response.body.created_by).toBeDefined()
 })
})

describe("PUT /edit/event/:id  Endpoints", () => {
  it('Return json containing list of all events', async () => {
  jest.setTimeout(() => {
    
  }, 6000);
   await supertest(app).put("/edit/event/:id")
   .send({ event_name: "Refactor code", location: "Change of location"})

   .expect(200)
   .set('Accept', 'application/json')
   .then((response) => {
    expect({value: 'value'}).toBeTruthy();
    expect(typeof {value: 'value'}).toBe('object');
    expect(response.body.length).not.toEqual(0)
   })
     
    })
  });

  describe("DELETE /delete/event/:id  Endpoints", () => {
    it('Remove json object', async () => {
      jest.setTimeout(() => {
    
      }, 9000);
      const response = await supertest(app).delete("/delete/event/:id")
     .set('Accept', 'application/json')
     .send()
     .expect(200)
     expect(response.body.message).toEqual('Your event was successfully deleted.');
      })
    });

  
  
jest.useRealTimers();