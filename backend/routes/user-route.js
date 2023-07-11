import express from 'express'
import controller from '../controllers/user-controller.js'

const router = express.Router();

router.get('/:id', controller.get);
router.post('/', controller.post);

export default router;
