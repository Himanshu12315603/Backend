const express = require("express");

const app = express();

function userMiddileware(req, res, next) {

    if(username != "himanshu" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect input",
        });
    }else {
        next();
    }
};

function kidneyMiddleware(req, res, next) {

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect input",
        });
    }else {
        next();
    }
};

app.get("/health-checkup", userMiddileware, kidneyMiddleware, (req, res) => {
    
    res.send("Your heart is healty");
});

app.get("/kidney-checkup", userMiddileware, kidneyMiddleware, (req, res)=> {

    res.send("Your kidney is healty");
});

app.get("/heart-checkup", userMiddileware, kidneyMiddleware, (req, res)=>{

    res.send("Your heart is healty");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
