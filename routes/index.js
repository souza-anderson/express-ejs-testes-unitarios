const express = require('express')
const indexController = require('../controllers/index')
const router = express.Router()

router.get('/', indexController.home)
router.get('/pagina1', indexController.pagina1)
router.get('/calc', indexController.calc)
router.get('/par/:num', indexController.par)

module.exports = router