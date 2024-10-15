const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    let product;

    product = new Product(req.body);

    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, category, ubication, price } = req.body;
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "The product does not exist" });
    }

    product.name = name;
    product.category = category;
    product.ubication = ubication;
    product.price = price;

    product = await Product.findOneAndUpdate({ _id: req.params.id }, product, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "The product does not exist" });
    }

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ msg: "The product does not exist" });
    }

    await Product.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: "Product delete" });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was an error");
  }
};
