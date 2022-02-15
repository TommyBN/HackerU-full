const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

const lecturers = [
    {
        id: 1,
        name: "Moshe",
        email: "moshe@moshe.com",
        languages: [
            1,
            3,
            9
        ]
    },
    {
        id: 20,
        name: "Avi",
        email: "avi@moshe.com",
        languages: [
            3
        ]
    },
    {
        id: 300,
        name: "Gila",
        email: "gila@moshe.com",
        languages: [
            1,
            6,
            8,
            9
        ]
    },
    {
        id: 350,
        name: "Yehonathan",
        email: "Yehonathan@moshe.com",
        languages: [
            2,
            4,
            5,
            8
        ]
    },
    {
        id: 23,
        name: "Gamliel",
        email: "Gamliel@moshe.com",
        languages: [
            2,
            3,
            7,
            9
        ]
    },
    {
        id: 67,
        name: "Shimon",
        email: "Shimon@moshe.com",
        languages: [
            2,
            4,
            6,
            7
        ]
    },
]

const languages = [
    {
        id: 1,
        name: "Java"
    },
    {
        id: 2,
        name: ".NET"
    },
    {
        id: 3,
        name: "NodeJS"
    },
    {
        id: 4,
        name: "Advanced Vanilla JS"
    },
    {
        id: 5,
        name: "React"
    },
    {
        id: 6,
        name: "Angular"
    },
    {
        id: 7,
        name: "Kotlin"
    },
    {
        id: 8,
        name: "Dart"
    },
    {
        id: 9,
        name: "Flutter"
    }
]


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


