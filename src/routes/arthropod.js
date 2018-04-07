const router = require('express').Router();
const arthropod_controller = require('../controllers/arthropod_controller');

router.route('/arthropod')
    .get(arthropod_controller.get)
    .post(arthropod_controller.save);

router.route('/arthropod/:id')
    .get(arthropod_controller.get_by_id)
    .put(arthropod_controller.update);

module.exports = router;