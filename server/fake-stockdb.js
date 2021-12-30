const Stock = require('./model/stock')

class FakeStockDb {

    constructor() {
        this.stocks = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Stock XL',
                price: 799,
                description: 'A large Stock with one of the best screens',
                heading1: 'sample1', 
                heading2: 'sample2', 
                heading3: 'sample3',
                headingtext1: 'description description description description description description description description',
                headingtext2: 'description description description description description description description description',
                headingtext3: 'description description description description description description description description',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Stock Mini',
                price: 699,
                description: 'A great Stock with one of the best cameras',
                heading1: 'sample1', 
                heading2: 'sample2', 
                heading3: 'sample3',
                headingtext1: 'description description description description description description description description',
                headingtext2: 'description description description description description description description description',
                headingtext3: 'description description description description description description description description',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Stock Standard',
                price: 299,
                description: 'A great Stock',
                heading1: 'sample1', 
                heading2: 'sample2', 
                heading3: 'sample3',
                headingtext1: 'description description description description description description description description',
                headingtext2: 'description description description description description description description description',
                headingtext3: 'description description description description description description description description',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Special',
                price: 299,
                description: 'A great phoneA great phone',
                heading1: 'sample1', 
                heading2: 'sample2', 
                heading3: 'sample3',
                headingtext1: 'description description description description description description description description',
                headingtext2: 'description description description description description description description description',
                headingtext3: 'description description description description description description description description',
              }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushStocksToDb()
    }

    async cleanDb() {
        await Stock.deleteMany({})
    }

    pushStocksToDb() {
        this.stocks.forEach(
            (stock) => {
                const newStock = new Stock(stock)
                newStock.save()
            }
        )
    }

    seeDb() {
        this.pushStocksToDb()
    }

}

module.exports = FakeStockDb