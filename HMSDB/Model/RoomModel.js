const mongoose=require("mongoose")

const RoomModel=mongoose.model("roomdatas",{
    paitentname:{type:String},
    treat:{type:String},
    drname:{type:String},
    roomno:{type:String}
})
module.exports=RoomModel