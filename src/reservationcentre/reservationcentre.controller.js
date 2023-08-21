const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const { customAlphabet: generate } = require("nanoid");



const reservationcentre = require("./reservationcentre.model");


const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

//Validate user schema
/* const sectionSchema = Joi.object().keys({
    nameSection: Joi.string().nameSection({ minDomainSegments: 2 }),
   
 
  }); */


exports.reservationcentrePost = async (req, res) => {
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
     result.reservationcentreId = id;
    const newreservationcentre= new reservationcentre(result);
    await newreservationcentre.save();

    return res.status(200).json({
      success: true,
      message: "reservation centre Saved",
      
    });
  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


exports.reservationcentreGetAll = async (req, res) => {
    reservationcentre.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
  };

  exports.reservationcentreGetLastDate = async (req, res) => {
    const now = new Date(); // Get the current date and time
  
    // Use the 'reservationcentre' model to find the last reservation based on the date
    reservationcentre
      .findOne({ datedepart: { $gt: now } }) // Filter by departure date greater than now
      .sort({ datedepart: 1 }) // Sort by date in ascending order (earliest date first)
      .exec(function (err, data) {
        if (err) {
          console.log(err);
          res.status(500).send({ error: 'Internal Server Error' });
        } else {
          if (data) {
            res.send(data.datedepart);
          } else {
            res.send(null); // No reservations found with departure date greater than now
          }
        }
      });
  };
  
  


   exports.reservationcentreGetByName= async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.send({
          status: 400,
          error: true,
          message: "Cannot be processed",
        });
      }
      const user = await reservationcentre.findOne({
        namereservationcentre: name,
      });
      if (!user) {
        return res.send({
          success: true,
          message:
            "reservationcentre not found",
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









