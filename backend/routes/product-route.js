import express from 'express'
import controller from '../controllers/product-controller.js'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'imgs/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })
const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getBySlug);
router.post('/', controller.post);
router.post('/img', upload.single('img'), controller.postImg)
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
export default router;
