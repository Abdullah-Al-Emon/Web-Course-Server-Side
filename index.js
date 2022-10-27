const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('web course server is running')
})

app.get('/new-course', (req, res) => {
    res.send(course)
})

app.listen(port, () => {
    console.log(`web course server running on port, ${port}`)
})