const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev-stock')
const FakeStockDb = require('./fake-stockdb')

const stockRoutes = require('./routes/stocks')

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedtopology: true
}).then(
    () => {
        const fakeStockDb = new FakeStockDb()
        // fakeStockDb.seeDb()
        fakeStockDb.initDb()
    }
)

const app = express();

app.use('/api/v1/stocks', stockRoutes)

// app.get('/stocks', function(req,res) {
//     res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
    console.log('Running!!!!!')
});