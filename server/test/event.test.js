
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


// const event = require('../routes/event')

// test('testing', () => {
//          expect(res.statusCode).toEqual(200);
//      expect(res.body).toEqual(
//         expect.objectContaining({
//             success: true,
//             data: expect.objectContaining({
                
//                 event_name: res.body.data.event_name,
//                 location:  res.body.data.location,
//                 date:  res.body.data.date,
//                 created_by:  res.body.data.created_by,
//                 price:  res.body.data.price,
//                 genre:  res.body.data.genre,
                
                

//             })
//         })
//      )

// })

// const request = require('supertest');
// const app = require('../server');
// const Event = require('../model/event')
// // Database connection
// const mongoose = require('../config/db')

// // let id;
// // let token;

// describe('Test the Events API', () => {

//     describe('POST/event', () => {
      
//      const eventMoc = {
//         event_name: 'Party Hard',
//         location: 'Lake District',
//         genre: 'Pop',
//         date: '12-9-2020',
//         price: '200',
//         created_by: 'Rhi Pops'
//      }
//      const res = request(app)
//      .post('/create/event')
//      .send(eventsMoc)
//      expect(res.statusCode).toEqual(200);
//      expect(res.body).toEqual(
//         expect.objectContaining({
//             success: true,
//             data: expect.objectContaining({
                
//                 event_name: res.body.data.event_name,
//                 location:  res.body.data.location,
//                 date:  res.body.data.date,
//                 created_by:  res.body.data.created_by,
//                 price:  res.body.data.price,
//                 genre:  res.body.data.genre,
                
                

//             })
//         })
//      )


//     })
// })


