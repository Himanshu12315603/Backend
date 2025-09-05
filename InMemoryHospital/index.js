const express = require("express");

const app = express();

var users = [{
    name: 'John',
    kidneys: [{
        healthy: false
    }]
}]

//app.use(express.json());


//User can check how many they have and their health
app.get("/", (req, res)=> {
    //return how many kidneys are healthy 
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealtyKidneys = 0;

    for(let i = 0; i<numberOfKidneys; i++) {
        if(johnKidneys[i].healthy) {
            numberOfHealtyKidneys++;
        }
    }

    const numberOfUnhealtyKidneys = numberOfKidneys - numberOfHealtyKidneys;

    console.log(numberOfHealtyKidneys);
    res.json({
        numberOfKidneys,
        numberOfHealtyKidneys,
        numberOfUnhealtyKidneys,
    })
})


//User can add a new kidneys 
app.post("/", (req, res)=> {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done!"
    })

})

//User can replace a kidneys and make it healthy
app.put("/", (res,req)=> {
    for(let i=0; i<user[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "done"
    })
})

//removeing all the unhealty kidneys
app.delete("/", (req, req)=> {

    // you should return 411, if there is no kidneys
    // only if atleast one unhealty kidneys is there do this, else return 411

    if(atleastOneUnhealthyKidneys()) {

        const newKidneys = [];
        for(let i=0; i<user[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy = true) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
    }else {
        res.sendStatus(411);
    }
    

    user[0].kidneys = newKidneys;
    res.json({msg: "done"})
})

function isThereAtLeastOneUnhealthyKidneys() {
    let atleastOneUnhealthyKidneys = false;
    for(let i=0; i<users[0].kidneys.length; i++) {
        if(!users[0].kidneys.healthy) {
            atleastOneUnhealthyKidneys = true;
        }
    }
    return atleastOneUnhealthyKidneys;
}

app.listen(3000);
