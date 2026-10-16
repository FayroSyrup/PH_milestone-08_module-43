import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

// request --> req
// response --> res
app.get('/', (req, res) => {
    res.send('Hello world from Express.js')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page from Express.js today')
})

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

