const express = require('express')
const { fetchOrdersByUser, createOrder, deleteOrder, updateOrder, fetchAllOrders } = require('../controller/Order.js');

const router = express.Router()

router.post('/', createOrder)
    .get('/', fetchOrdersByUser)
    .delete('/:id', deleteOrder)
    .patch('/:id', updateOrder)
    .get('/admin/', fetchAllOrders)


exports.router = router