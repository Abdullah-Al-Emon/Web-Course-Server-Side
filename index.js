const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

const course = require('./data/course.json')
const details = require('./data/details.json')

app.get('/', (req, res) =>
{
    res.send('web course server is running')
})

app.get('/new-course', (req, res) =>
{
    res.send(course)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course_details = details.filter(c => c.category_id === id)        // console.log(course_details)
    res.send(course_details);

})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const selectDetails = details.find(c => c._id === id)
    res.send(selectDetails)
})

app.get('/details', (req, res) => {
    res.send(details)
})

app.listen(port, () =>
{
    console.log(`web course server running on port, ${port}`)
})