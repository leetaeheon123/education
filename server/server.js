const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => {
    console.log(`${port}번 port에서 시작함.`)
})

