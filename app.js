const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')
const lecturers = data.lecturers
const languages = data.languages

app.use(express.static('public'))

app.get('/lecturers', async (req, res) => {
    try {
        res.json(lecturers)
    } catch (e) {
        res.json('Failed: ' + e)
    }
})

app.get('/languages', async (req, res) => {
    try {
        res.json(languages)
    } catch (e) {
        res.json('Failed: ' + e)
    }

})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});


