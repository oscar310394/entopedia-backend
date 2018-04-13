const router = require('express').Router();
const calendar_controller = require('../controllers/calendar_controller');

router.route('/calendar')
    .get(calendar_controller.get)
    .post(calendar_controller.save);

router.route('/calendar/:id')
    .get(calendar_controller.get_by_id)
    .put(calendar_controller.update)
    .delete(calendar_controller.delete);

module.exports = router;