class ProductList {
    constructor() {
        this.actualID = 0
        this.products = []
    }
    productWithID(id) {
        return (this.products.filter( elem => elem.id == id)[0])
    }
    addProduct(product) {
        try {
            product.id = this.actualID
            this.products.push(product)
            this.actualID++
        }
        catch(err) {
            (console.log(err))
        }
    }
    updateProduct(productID, product) {
        let indexByID = this.products.indexOf(this.productWithID(productID))
        if (this.products[indexByID]) {
            product.id = parseInt(productID)
            this.products[indexByID] = product
        }
    }
    deleteProduct(productID) {
        let indexByID = this.products.indexOf(this.productWithID(productID))
        if (this.products[indexByID]) {
            this.products.splice(indexByID, 1)
        }
    }

}

module.exports = ProductList