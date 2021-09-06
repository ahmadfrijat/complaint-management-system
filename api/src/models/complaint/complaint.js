'use strict';

const mongoose = require('mongoose');


// the schema for complaint
const complaintSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  complaint: { type: String, required: true }
});

const complaintModel = mongoose.model('complaint', complaintSchema);

module.exports = complaintModel;