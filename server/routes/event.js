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
      
        res.json(event)
    })
})

// GET Events

router.get('/view/events', (req, res) => {
    Event.find({}, (err, events) => {
        if (err){
            res.send('something went wrong :(')
    
        }
        
        res.json(events)
          
    })

})

// GET Event by id

router.get('/view/event/:id', (req, res) => {

    Event.findById(req.params.id, (err, event) => {
        if (err){
            res.send(err)
        }
        res.json(event)
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
        res.json({ message: 'Successfully deleted event'})
    })
})

module.exports = router;