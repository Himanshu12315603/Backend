const express = require("express")
const zod = require("zod");

const app = express();

// if this is array of number with atleast 1 input, return true, else return false

function inputValidator(obj) {
    const schema = zod.object({
        email : zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}


inputValidator({
    email: "himanshu@gmail.com",
    password: "9jfd93hd9ql2"
});


/*
app.post("/login", (req, res)=> {
    const response = inputValidator(req.body)

    if(!response.success) {
        res.json({
            msg: "Your input is invalid"
        })
        return;
    }
})
*/

app.listen(3000)
