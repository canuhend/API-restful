const express = require('express')
const router = express.Router()
const path = require('path')
const ProductListClass = require('../classes/productos.js')

module.exports = router

let productList = new ProductListClass

router.get('/api/productos', (req, res)  => {
  res.json(productList.products)
})

router.get('/api/productos/:id', (req, res)  => {
  let product = productList.productWithID(req.params.id)
  if (!product) {
    res.json({error: 'There is no product with the given ID'})
  }
  else {
    res.json(product)
  }
})

router.get('/api/addProduct', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'add-form.html'))
})

router.post('/api/productos', (req, res) => {
  productList.addProduct(req.body)
  res.json(productList.products.at(-1))
})

router.put('/api/productos/:id', (req,res) => {
  if (productList.productWithID(req.params.id)) {
    productList.updateProduct(req.params.id, req.body)
    res.json({status: 'Success'})
  }
  else res.json({error: 'There is no product with the given ID'})
})

router.delete('/api/productos/:id', (req, res) => {
  productList.deleteProduct(req.params.id)
  res.json({status: 'Success'})
})