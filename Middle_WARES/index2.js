const express = require("express")
const app = express();


function isOldEnough(req, res, next) {
    const age = req.query.age;

    if(age >= 14) {
        next();
    }else {
        res.json({
            msg : "sorry  you are not of age yet"
        });
    }
}

// or can be use this as middile ware
//app.use(isOldEnough);

app.get("/ride1", isOldEnough, (req, res)=> {
    res.json({
        msg : "You have successfully riden by the ride1"
    }); 
});

app.get("/ride2", isOldEnough, (req, res)=> {
    res.json({
        msg : "You have successfully riden by the ride1"
    })
});

app.listen(3000);
