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
    condition: {
      type: String,
      required: true
    },
    years: {
      type: Number
    },
    userId: { type: Schema.Types.ObjectId, 
      ref: "User"},
    ownerName: {
      type: String
    }

  
}, {
  timestamps: true
});

module.exports = mongoose.model('Instrument', instrumentSchema);
