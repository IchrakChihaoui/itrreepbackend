const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const { customAlphabet: generate } = require("nanoid");



const meteo = require("./Meteo.model");


const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

//Validate user schema
/* const sectionSchema = Joi.object().keys({
    nameSection: Joi.string().nameSection({ minDomainSegments: 2 }),
   
 
  }); */


exports.meteoPost = async (req, res) => {
  try {
    const result = req.body
    if (result.error) {
      console.log(result.error.message);
      return res.json({
        error: true,
        status: 400,
        message: result.error.message,
      });
    }
    //Check if the email has been already registered.
 

    const id = uuid(); //Generate unique id for the user.
     result.meteoId = id;
    const newmeteo= new meteo(result);
    await newmeteo.save();

    return res.status(200).json({
      success: true,
      message: "meteo Saved",
      
    });
  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


exports.meteoGetAll = async (req, res) => {
    meteo.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
  };


   exports.meteoGetByName= async (req, res) => {
   
       
    try {
      const { name } = req.body;
      if (!name) {
        return res.send({
          status: 400,
          error: true,
          message: "Cannot be processed",
        });
      }
      const user = await meteo.findOne({
        namemeteo: name,
      });
      if (!user) {
        return res.send({
          success: true,
          message:
            "randonne not found",
        });
      }
  
     
  
     /*  if (response.error) {
        return res.status(500).json({
          error: true,
          message: "Couldn't send mail. Please try again later.",
        });
      } */
  
      
  
      return res.send({
        success: true,
        data:user,
        message:
          "succes",
      });
    } catch (error) {
      console.error("forgot-password-error", error);
      return res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  } 









