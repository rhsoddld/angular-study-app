const express = require('express')
const mongoose = require('mongoose')
// const config = require('./config/dev')
const config = require('./config')  // same as ./config/index (index can be skip)
const FakeDb = require('./fake-db')
const bodyParser = require('body-parser')

const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')

const path = require('path')

// mongodb+srv://xxxxxxxx:xxxxxxx@clusterxxxxxx.XXXXXXXXXX.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        if (process.env.NODE_ENV !== 'production') {        //not production
            const fakeDb = new FakeDb()
            // fakeDb.seeDb()
            // fakeDb.initDb()
        }
    }
)

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)


if (process.env.NODE_ENV == 'production') {
    // using build files for production (use * except for '/api/v1/products')
    const appPath = path.join(__dirname, '..', 'dist', 'reservation-app')
    app.use(express.static(appPath))
    app.get("*", function(req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}

// app.get('/products', function(req,res) {
//     res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('Running')
})

