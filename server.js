const express = require('express')

const app = express()
const port = 8000

app.use(express.static('build'))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})