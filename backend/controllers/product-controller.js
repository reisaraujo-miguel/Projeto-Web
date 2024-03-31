import path from "path";
import Product from "../models/product-model.js";

const productController = {};

productController.get = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: "Falha na busca do produtos",
      data: e,
    });
  }
};

productController.getBySlug = async (req, res) => {
  try {
    const data = await Product.find({ slug: req.params.id });
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({
      message: "Falha na busca do produto",
      data: e,
    });
  }
};

productController.getImgByPath = async (req, res) => {
  try {
    const imgPath = path.join(path.resolve(), "/imgs/", req.params.id);
    res.status(200).sendFile(imgPath);
  } catch (e) {
    res.status(400).send();
  }
};

productController.postImg = async (req, res) => {
  res.status(200).send({
    message: "Imagem enviada",
  });
};

productController.post = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send({
      message: "Produto cadastrado",
    });
  } catch (e) {
    res.status(400).send({
      message: "Falha no cadastro de produto",
      data: e,
    });
  }
};

productController.put = async (req, res) => {
  try {
    await Product.findOneAndUpdate(
      { slug: req.params.id },
      {
        $set: {
          name: req.body.name,
          slug: req.body.slug,
          description: req.body.description,
          price: req.body.price,
          quantity: req.body.quantity,
          imgPath: req.body.imgPath,
        },
      },
    );
    res.status(201).send({
      message: "Dados de produto atualizados",
    });
  } catch (e) {
    res.status(400).send({
      message: "Falha ao atualizar dados do produto",
    });
  }
};

productController.delete = async (req, res) => {
  try {
    await Product.deleteOne({ slug: req.params.id });
    res.status(201).send({
      message: "Produto deletado",
    });
  } catch (e) {
    res.status(400).send({
      message: "Falha ao deletar produto",
    });
  }
};

export default productController;
