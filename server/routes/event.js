const express = require('express');
const { findById } = require('../model/event');
const router = express.Router();

const Event = require('../model/event')


// CREATE Events

router.post('/create/event', (req, res) => {

    const newEvent = new Event( {
        
        event_name: req.body.event_name,
        location: req.body.location,
          genre: req.body.genre,
           date: req.body.date,
           created_by: req.body.created_by,
           price: req.body.price,
  
    })
        
    
   newEvent.save((err, event) => {
        if (err){
            
           res.sendStatus(400)
    
        }
      
        res.json(event)
    })
  
})

// GET Events

router.get('/view/events', async (req, res) => {
        await Event.find()
        .then(events => res.json(events))
        .catch(err => res.sendStatus(404).json({noeventsfound: 'No Event found' }))

})


// GET Event by id

router.get('/view/event/:id', async (req, res) => {

    try {
        const eventData = await Event.findById(req.params.id)
        res.json(eventData)
    } 
    catch(err){
        res.sendStatus(500).json({message: err.message})
    }

 
})

router.get('/edit/event/:id', async (req, res) => {

    try {
        const eventData = await Event.findById(req.params.id)
        res.json(eventData)
    } 
    catch(err){
        res.sendStatus(500).json({message: err.message})
    }

 
})



 // GET Edit Page

//  router.get('/edit/event', async (req, res) => {
//    const eventId =  await req.params.id
//     .then(eventId => res.json(eventId))
//     .catch(err => res.sendStatus(404).json({noeventsfound: 'No Event found' }))

// })
 



// EDIT Event

router.patch('/edit/event/:id', async (req, res) =>{

try{
    const id = req.params.id
    const eventData = req.body;
    const editEvent = await Event.findByIdAndUpdate(id, eventData,
         {new: true})

    if (editEvent) {
        res.send(editEvent)
    } 
}
    catch {
        res.sendStatus(500).json({error: 'something went wrong'})
    }

})

// DELETE Event

router.delete('/delete/event/:id',  (req, res) => {

        Event.deleteOne({id: req.params.id},  (err, event) => {
        if (err){
            res.sendStatus(400)
        }
        res.json( {event, message: 'Your event was successfully deleted.'})
    })
})

const getEventId = (req, res) => {
    Event.findById(req.params.id, (err, event) => {
        if(err){
            res.send(err)
        }
        res.json(event)
    })
}


module.exports = router;

