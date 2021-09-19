const express = require('express')
const app = express()
const path = require('path')

// Public papka ulash
app.use(express.static(path.join(__dirname, 'public')))

// Pug ulash
app.set('views engine', 'pug')

// Pug papkani ko'rsatish
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index.pug', {
        title: 'Home page'
    })
})

app.get('/about', (req, res) => {
    res.render('about.pug', {
        title: 'About page'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact.pug', {
        title: "Contact page",
        arr: [1, 3, 3, 85, 4]
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Express working on ${port} port...`);
})