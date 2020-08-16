const path = require('path')
const express = require('express')
const hbs = require('hbs')





const app = express()

const port = process.env.PORT || 3000


const newpath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partials')





app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)





app.use(express.static(newpath))





app.get('',(req, res)=> {
    res.render('index', {
        title: 'weather app',
        name: 'jatinddharmik',
        footer: 'f1'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about app',
        name: 'about name',
        footer: 'f2'
    })
})

app.get('/render', (req, res) => {
    const t = {
        city: 'nagpur',
        temp: 29

    }
    const z = JSON.parse(t)
    res.send((z))
})

app.get('/help',(req, res) =>{
    res.render('help',{
        title: 'any help',
        name: 'jd pro',
        footer: 'f3'
    })
})

app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            err: 'you must provide an address'
        })
    }
    res.send({
        forecast: 'It is raining',
        location: 'nagpur',
        address: req.query.address
    })
})

app.get('/products', (req, res) =>{
    if(!req.query.search) {
        return res.send({
            error: 'you must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) =>{
    res.send('inside help is not found')
})

app.get('*', (req, res) =>{
    res.render('error404',{
        take: 'errorrrr',
        name: 'jatin'
    })
})


 



app.listen(port, () => {
    console.log('server is upto on port ' + port)
})