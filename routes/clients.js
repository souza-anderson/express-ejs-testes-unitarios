const express = require('express')
const clientsContoller = require('../controllers/clients')
const router = express.Router()

router.get('/create', clientsContoller.create)

router.get('/list', clientsContoller.create)

module.exports = router