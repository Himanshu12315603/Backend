const express = require('express');
const app = express();

app.use(express.json());


app.get("/product", (req, res) => {
    const product = [
        {id: 1, name: "laptop", price: 5000},
        {id: 2, name: "Mobile", price: 2000}
    ]
    res.status(200).json(product);
});

app.post("/product", (req, res) => {
    const productData = req.body;

    console.log("Recived Product:", productData);

    res.status(201).json({
        message: "product Recived successfully",
        product: productData
    });
})

app.listen(3000, ()=> {
    console.log("Server is running in 3000");
})
