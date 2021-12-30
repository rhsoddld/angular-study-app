const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'sample1', 
                heading2: 'sample2', 
                heading3: 'sample3',
                headingtext1: 'description description description description description description description description',
                headingtext2: 'description description description description description description description description',
                headingtext3: 'description description description description description description description description',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1: 'sample1', 
                heading2: 'sample2', 
                heading3: 'sample3',
                headingtext1: 'description description description description description description description description',
                headingtext2: 'description description description description description description description description',
                headingtext3: 'description description description description description description description description',
              },
              {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: 'A great phone',
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
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb