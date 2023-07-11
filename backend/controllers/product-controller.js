import mongoose from 'mongoose'

const Product = mongoose.model('Product');

const productController = {};

productController.get = async (req, res) => {
    const data = await Product.find({slug: req.params.id})
    res.status(200).send(data)
}
productController.post = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send({
        message: "Produto cadastrado"
    });
}

export default productController;
