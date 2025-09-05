const express = require('express')
const app = express();
const port = 3000


app.get('/route/machine', (req, res) => {
    res.json({
        name: "Himanshu",
        age: 19,
        college: "Lovely Professional University"
    })
})

app.post('/conversations', (req, res) => {
    res.send('<b>hi there <b>')
})

app.get('/', function(req, res) {
  res.send('Hello dude!')
})

app.listen(port);

