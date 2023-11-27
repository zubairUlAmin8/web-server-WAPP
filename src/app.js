const express=require('express')
const path=require('path')
const hbs=require('hbs')
const { currentTemp }=require('./utils/CurrenTemp')



// Defining Path
// _______________________________
const publicDirPath=path.join(__dirname, '../public')

const viewPath=path.join(__dirname, '../templates/views')
const parttialPath=path.join(__dirname, '../templates/partials')
const app=express()


//set views
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(parttialPath)

app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.render('index', {
        city2:'Karachi', 
        city1:'Lahore'
    })

})

app.get('/contact', (req, res)=>{
    res.render('contact', {
        address:'Karachi', 
        phone:'03460471771',
        email:'zubairulamin@gmail.com'
    })

})

app.get('/weather', (req, res)=>{

    if(!req.query.city){
       return res.send({
            error:'Please provide the city name'
        })
    }
    console.log(req.query.city)
    const cityName=req.query.city;

    currentTemp("cityName", (error, response, body)=>{


            if(body.error){
                res.send(body.error)
            }
            else{
                res.send({
                    temperature: body.current.temperature, 
                    feel_like:body.current.feelslike,
                    weather_descriptions:body.current.weather_descriptions,
                    location:body.location.name
                })
            }
           
    })
    
    // Cannot set headers after they are sent to the client..........error when send two response same time..to address we use return with above response
})


app.get('*', (req, res)=>{
    res.render('notFoundPage')

})

// app.get('', (req, res)=>{
//     res.send("<h1>welcom to the server<h2>")
// })

// app.get('/help', (req, res)=>{
//     res.send("welcom to help")
// })
// app.get('/about', (req, res)=>{
//     res.send({
//         name:"Zubair ul Amin",
//     })
// })


app.listen(3000, ()=>{
    console.log("Server is running")
})