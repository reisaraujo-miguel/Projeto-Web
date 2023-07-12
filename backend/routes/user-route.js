import express from 'express'
import controller from '../controllers/user-controller.js'

const router = express.Router();

router.get('/', controller.get);
router.get('/admins', controller.getByIsAdmin);
router.get('/:id', controller.getByUsername);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
