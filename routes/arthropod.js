const express = require('express');
const router = express.Router();

let arthropodController = require('../controllers/arthropodController');

router.route('/')
    .get(arthropodController.getArthropod)
    .post(arthropodController.saveArthropod);

router.route('/:id')
    .get(arthropodController.getArthropodById)
    .put(arthropodController.updateArthropod)
    .delete(arthropodController.deleteArthropod);


module.exports = router;