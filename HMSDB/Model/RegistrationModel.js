const mongoose=require("mongoose")

const RegistrationModel=mongoose.model("registrations",{
    name:{type:String},
    number:{type:String},
    email:{type:String},
    dob:{type:String},
    aadhar:{type:String},
    date:{type:String},
    address:{type:String}
})
module.exports=RegistrationModel