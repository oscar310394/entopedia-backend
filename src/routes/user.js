const router = require('express').Router();
const user_controller = require('../controllers/user_controller');

router.route('/user')
.get(user_controller.get)
.post(user_controller.save);

router.route('/user/:id')
.get(user_controller.get_by_id)
.put(user_controller.update)
.delete(user_controller.delete);

module.exports = router;