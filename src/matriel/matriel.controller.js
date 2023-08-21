const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const { customAlphabet: generate } = require("nanoid");




const matriel = require("./matriel.model");


const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

//Validate user schema
/* const sectionSchema = Joi.object().keys({
    nameSection: Joi.string().nameSection({ minDomainSegments: 2 }),
   
 
  }); */


exports.matrielPost = async (req, res) => {
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
     result.MatrielId = id;
     
    await newmatriel.save();

    return res.status(200).json({
      success: true,
      message: "matriel Saved",
      
    });
  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


exports.matrielGetAll = async (req, res) => {
    matriel.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
  };


   exports.matrielGetByName= async (req, res) => {
   
       
    try {
      const { name } = req.body;
      if (!name) {
        return res.send({
          status: 400,
          error: true,
          message: "Cannot be processed",
        });
      }
      const user = await matriel.findOne({
        namematriel: name,
      });
      if (!user) {
        return res.send({
          success: true,
          message:
            "matriel not found",
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


  exports.deletematriel = async (req, res) => {
    
    try {
      const matrielId = req.params.id;
      console.log("teeeest",matrielId)
  
      // Logique de suppression de l'élément favorie avec l'ID spécifié
      // Remplacez cela par votre propre logique de suppression
  
      // Exemple de code pour supprimer l'élément favorie de la base de données
      await matriel.findByIdAndDelete(matrielId);
  
      // Exemple de succès de suppression
      return res.status(200).json({
        success: true,
        message: "matriel supprimé avec succès",
      });
    } catch (error) {
      console.log(error)
      console.error("delete-error", error);
      return res.status(500).json({
        error: true,
        message: "Impossible de supprimer",
      });
    }
  };








