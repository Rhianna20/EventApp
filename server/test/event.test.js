
const supertest = require('supertest'); 
const app = require('../app')


jest.useFakeTimers();

// move into folder of file being tested

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

describe("PUT /edit/event/:id  Endpoints", () => {
  it('Return single json object of an event', async () => {
  jest.setTimeout(() => {
    
  }, 6000);
   await supertest(app).put("/edit/event/:id")
   .expect(200)
   .set('Accept', 'application/json')
   .then((response) => {
    expect({value: 'value'}).toBeTruthy();
    expect(typeof {value: 'value'}).toBe('object');
    expect(response.body.length).not.toEqual(0)
   })
     
    })
  });
  
jest.useRealTimers();