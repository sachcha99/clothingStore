const Product = require("../model/product.model");

//Add New Product
const createProduct = async (req, res) => {
    if (req.body) {

        const product = new Product(req.body);

        await product.save()
            .then(data => res.status(200).send({ data: data }))
            .catch(err => {
                res.status(500).send(err)
            });
    }
}

//update Product Details
const updateProduct = async (req, res) => {
    if (req.body) {
        if (!req.params.id) return res.status(500).send("Id is missing");
        let id = req.params.id;

        updateDetails(id, req, (err, product) => {
            if (err) {
                res.status(500).send(err)
                // return res.status(500).send(err)
            };
            res.status(200).send(product);
        })
    }
}

function updateDetails(id, req, callback) {
    Product.findByIdAndUpdate(id, req.body)
        .then((res) => {
            Product.findOne({ _id: id }, (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err);
                } else {
                    var product = result;
                    return callback(null, product);
                }
            });
        })
        .catch(err => {
            console.log(err)
            return callback(err);
        })
}

//get All Products
const getAllProducts = async (req, res) => {
    await Product.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//delete Product
const deleteProduct = async (req, res) => {
    if (req.params.id) {
        await Product.findByIdAndDelete(req.params.id, (err, result) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(result);
        });
    }
}

//getProductById
const getProductById = async (req, res) => {
    await Product.find({ _id: req.params.id }, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    })
};

//Search Product
const searchProduct = async (req, res) => {

    await Product.find({ 'name': { $regex: '.*' + req.params.name + '.*' } }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
};

//get Products By status
const getProductByStatus = async (req, res) => {
    await Product.find({ status: req.params.status })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

//get Products By status
const getProductByCategory = async (req, res) => {
    await Product.find({ category: req.params.category })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    searchProduct,
    getProductByStatus,
    getProductByCategory
}