const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    years: {
      type: Number
    }
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Instrument', instrumentSchema);
