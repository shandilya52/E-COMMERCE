import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import router from "./routes/authRoute.js"
import cors from "cors"
import catagoryRouter from "./routes/catagoryRoute.js"
import productRouter from "./routes/productRoute.js"
dotenv.config()


//database config
connectDB()

//rest object
const app = express()

// middlewares
app.use(cors())
app.use(morgan('dev'))



//routes
app.use('/api/v1/auth', router)
app.use('/api/v1/catagory', catagoryRouter)
app.use('/api/v1/products', productRouter)
//rest api
app.get("/", (req, res)=>{
    res.send({
        message: `Hello World!`
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})