const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator = require("validator")
const jwt = require("jsonwebtoken");


const businessSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    GST:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    street_adress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    image:{
        Type:String,
        required:true
    }

})

// studentSchema.methods.generateAuthTokenStudent=async function(){
//     try{
//         const token= jwt.sign({_id:this._id.toString()},process.env.STUDENT_SECRET_KEY)
//         this.tokens=this.tokens.concat({token:token})
//         await this.save()
//         return token
        
//     }
//     catch(error){
//         console.log(error);
//     }
// }



// businessSchema.pre("save",async function (next){
//     if(this.isModified("password")){
//         this.password=await bcrypt.hash(this.password,5)
//     }
// })


const Business= mongoose.model("Business",businessSchema);
module.exports=Business;
