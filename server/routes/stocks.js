const express = require('express')
const router = express.Router()
const Stock = require('../model/stock')

router.get('', function(req, res) {
    //return all documents
    Stock.find({}, function(err, foundStocks) {
        return res.json(foundStocks)
    })
})

router.get('/:stockId', function(req, res) {
    //return match document
    const stockId = req.params.stockId
    Stock.findById(stockId, function(err, foundStock) {
        if(err) {
            return res.status(422).send(
            { 
                errors: [{ 
                    message: 'Error!!!!!!!!!!!'
                }]
            })
        }
        
        return res.json(foundStock)
    })
})

module.exports = router