import express from 'express'
import controller from '../controllers/product-controller.js'

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getByUsername);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
export default router;
