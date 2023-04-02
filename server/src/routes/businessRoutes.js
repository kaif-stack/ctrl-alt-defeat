const express = require("express");
const mongoose=require("mongoose")
const Business=require("../models/Business");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs")
const router = express.Router();

router.post("/registerBusiness", async (req, res) => {
  try {
    const {
      name,
      email,
      latitude,
      longitude,
      mobile,
      GST,
      country,
      image,
      street_address,
      city,
      state,
      pincode,

    } = req.body;
console.log(name)
    Business.findOne({ email: email }).then((savedBusiness) => {
      if (savedBusiness) {
        return res.status(422).json({ error: "Business already exist" });
      }
    });

    const business = new Business({
      name,
      email,
      latitude,
      longitude,
      mobile,
      email,
      image,
      GST,
      country,
      street_address,
      city,
      state,
      pincode,
    });
    // const token=await student.generateAuthTokenStudent()

    // res.cookie("jwt",token,{
    //    expires:new Date(Date.now()+3000000),
    //    httpOnly:true
    // })
    await business.save();
  } catch (e) {
    console.log(e);
    res.status(400).send("Invalid Details");
  }
});

router.get("/allbusiness", async (req, res) => {
  try {
    const business = await Business.find().exec();
    res.json({
      success: true,
      business,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.post("/signinBusiness",async(req,res)=>{
    try {
        const {
          email,
          password
        } = req.body;
        const id=await Student.findOne({email:email});
        const token=await id.generateAuthTokenStudent()
       res.cookie("jwt",token,{
        expires:new Date(Date.now()+3000000),
        httpOnly:true
     })
        const isMatch=await bcrypt.compare(password,id.password)
        if(isMatch){
          console.log("student login success")
            res.status(201).redirect("/index")
           }
           else{
            res.send("Invalid login details")
           }
      } catch (e) {
        res.status(400).send("Invalid Details");
      }
})
module.exports=router;
