const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const { customAlphabet: generate } = require("nanoid");



const favorie = require("./favorie.model");


const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

//Validate user schema
/* const sectionSchema = Joi.object().keys({
    nameSection: Joi.string().nameSection({ minDomainSegments: 2 }),
   
 
  }); */


exports.favoriePost = async (req, res ) => {

  try {
    const result = req.body.data
     console.log("teeeest",result)

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
     result.favorieId = id;
    const newfavorie= new favorie(result);
    await newfavorie.save();

    return res.status(200).json({
      success: true,
      message: "favorie Saved",
      
    });
  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot save",
    });
  }
};


exports.favorieGetAll = async (req, res) => {
    favorie.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
  };


   exports.favorieGetByName= async (req, res) => {
   
       
    try {
      const { name } = req.body;
      if (!name) {
        return res.send({
          status: 400,
          error: true,
          message: "Cannot be processed",
        });
      }
      const user = await favorie.findOne({
        namefavorie: name,
      });
      if (!user) {
        return res.send({
          success: true,
          message:
            "favorie not found",
        });
      }
  
  
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

  exports.deleteFavorie = async (req, res) => {
    
    try {
      const favorieId = req.params.id;
      console.log("teeeest",favorieId)
  
      // Logique de suppression de l'élément favorie avec l'ID spécifié
      // Remplacez cela par votre propre logique de suppression
  
      // Exemple de code pour supprimer l'élément favorie de la base de données
      await favorie.findByIdAndDelete(favorieId);
  
      // Exemple de succès de suppression
      return res.status(200).json({
        success: true,
        message: "favorie supprimé avec succès",
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
  







