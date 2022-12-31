const express = require('express');
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
        
    
    // })
    
   newEvent.save((err, event) => {
        if (err){
            res.send(err)
    
        }
      
        res.status(200).json(event)
    })
})

// GET Events

router.get('/view/events', async (req, res) => {
        await Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(404).json({noeventsfound: 'No Event found' }))

})

// GET Event by id

router.get('/view/event/:id', async (req, res) => {

         Event.findById(req.params.id, (err, event) => {
        if (err){
            res.send(err)
        }
        res.status(200, "Event successfully returned").json(event)
    })


})

// EDIT Event

router.put('/edit/event/:id', (req, res) =>{

   Event.findOne({_id: req.params.id}, req.body, { new: true, useFindAndModify: false }, (err, event) => {
        if (err){
            res.send(err)
        }
        res.json(event)
    })

})

// DELETE Event

router.delete('/delete/event/:id', (req, res) => {

    Event.remove({_id: req.params.id},  (err, event) => {
        if (err){
            res.send(err)
        }
        res.json(event, { message: 'Successfully deleted event'})
    })
})

module.exports = router;