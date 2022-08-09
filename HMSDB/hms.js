const express=require("express")
const cors=require("cors")
const app=express()
const ConnectDB = require("./ConnectDB")
const RegistrationModel =require("./Model/RegistrationModel")
const RoomModel = require("./Model/RoomModel")

app.use(express.json())
app.use(cors())

app.get("/registration",async(req,res)=>{
    ConnectDB()
    const result = await RegistrationModel.find({})
    res.send(result)
})

app.post("/api/addregistration",(req,res)=>{
    ConnectDB()
    const newRegistration= new RegistrationModel(req.body)
    newRegistration.save()
    res.send("New Register added successfully!!")
})

app.get("/roomdata",async(req,res)=>{
    ConnectDB()
    const result= await RoomModel.find({})
    res.send(result)
})

app.post("/api/addroomdata",(req,res)=>{
    ConnectDB()
    const newroomdata= new RoomModel(req.body)
    newroomdata.save()
    res.send("New Roomdata added successfully!!")
})


app.listen(4444,()=>{
    console.log(`Connected to server : 4444`)
})