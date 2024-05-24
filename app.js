const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.end(`<h1>Benvenuto nel mio blog!</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})