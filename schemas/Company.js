const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    companyName: {
      type: String,
      required: true
    },
    teamSize: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    employees: {
      type: Array
    },
    webAddress: {
      type: String,
      required: true
    },
    createdAt: { 
      type: Date, 
      default: Date.now 
    },
    subscriptionPlan: {
      type: String, 
      default: 'free'
    },
    timeZone: {
      type: String, 
      default: 'EST'
    },
    fiscalYearStart: {
      type: String, 
      default: 'January'
    },
    currency: {
      type: String, 
      default: 'USD'
    },
    hoursPerWeekLimit: {
      type: Number
    }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;