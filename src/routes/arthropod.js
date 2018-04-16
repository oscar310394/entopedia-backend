const router = require('express').Router();
const arthropod_controller = require('../controllers/arthropod_controller');
const auth = require('../middlewares/auth');

router.route('/arthropod')
    .get(arthropod_controller.get)
    .post(auth.verifyToken, arthropod_controller.save);

router.route('/arthropod/:id')
    .get(auth.verifyToken, arthropod_controller.get_by_id)
    .put(auth.verifyToken, arthropod_controller.update);

module.exports = router;