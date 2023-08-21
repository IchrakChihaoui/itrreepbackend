const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const  options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true};

exports.processPayment = async (amount, customerId, materiels, number ,exp_month ,exp_year ,cvc,currency,type) => {
    try {
            const token = await stripe.tokens.create({
              card: {
                number: number,
                exp_month: exp_month,
                exp_year: exp_year,
                cvc: cvc,
              },
            });


        const charge = await stripe.charges.create({
            amount: amount,
            currency: currency,
            source: token.id,
            //customer: customerId,
            description: `Payment id for user id : ${customerId}`,
        });


        if (charge.status === "succeeded") {
                let date = new Date();
                var date_exp = date.setFullYear(date.getFullYear() + 1)
                var statu_achat = `Actif`
            return {
                success: true,
                stripeToken: token.id,
                amount: amount ,
                currency: currency,
                statu_paiement: "succeeded",
                payment_id: charge.id,
                customer_id: customerId,
                materiels: materiels,
                date_paiement: new Date ().toLocaleString('en-US', options),
                date_exp: new Date(date_exp).toLocaleString('en-US', options),
                statu_achat:statu_achat,
                type:type 

            };
        } else {
            throw new Error("Payment failed");
        }
    } catch (error) {
        throw error;
    }
};
