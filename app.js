const express = require('express')
const app = express()

app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))