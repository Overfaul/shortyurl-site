const Router = require('express')
const router = new Router()
const urlController = require('../controllers/urlController')
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}

router.post('/cshorturl',cors(corsOptions), urlController.createShortUrl)
router.get('/:code',cors(corsOptions), urlController.useShortUrl)

module.exports = router