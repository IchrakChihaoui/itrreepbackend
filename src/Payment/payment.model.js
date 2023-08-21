
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    stripeToken: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    statu_paiement: { type: String, required: true },
    payment_id: { type: String, unique: true, required: true },
    customer_id: { type: String, unique: false, required: true },
    materiels: { type: [{ }], unique: false, required: true },
    date_paiement: { type: Date, default: Date.now() },
    date_exp: { type: Date, required: true },
    statu_achat: { type: String, required: true },
    type: { type: String, required: true },

});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;