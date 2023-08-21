const PaymentProcess = require("./paymentProcess");
const Payment = require("./payment.model");
const Joi = require("joi");
const { v4: uuid } = require("uuid");
const  options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true};


const abonnementSchema = Joi.object().keys({
    stripeToken: Joi.string().required(),
    currency: Joi.string().required(),
    customer_id: Joi.string().required(),
    amount: Joi.number().required(),
    materiels : Joi.array().items(Joi.object().keys({}))
  });

    exports.payment = async (req, res) => {
        try {
          
        /*   var payment = await Payment.findOne({
            title: result.value.title,
          });
      
          if (payment) {
            return res.json({
              error: true,
              message: "Plan payment is already exist",
            });
          } */
      
          const paymentData = await PaymentProcess.processPayment(
            req.body.amount,
            req.body.customer_id,
            req.body.materiels,
            req.body.number,
            req.body.exp_month,
            req.body.exp_year,
            req.body.cvc,
            req.body.currency,
            req.body.type,

        );
         
        console.log(paymentData)
          const payment = new Payment(paymentData);
          await payment.save();
      
          return res.status(200).json({
            success: true,
            message: "Payment created successfully",
          });
        } catch (error) {
          console.log(error) 

          return res.status(500).json({
            error: true,
            message: "Cannot create payment", error,
          });
        }
      }

   
    
