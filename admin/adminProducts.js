module.exports = async (req, res) => {
    try {
        let products = await Product.find({}); 
        res.render('admin/adminProductsView', { title: "Manage Products", products: products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
};