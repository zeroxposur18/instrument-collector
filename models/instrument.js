const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instrumentSchema = new Schema({
    brand: {
      type: String,
      
    },
    model: {
      type: String,
  
    },
    years: {
      type: Number
    },
    userId: { type: Schema.Types.ObjectId, ref: "User"}
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Instrument', instrumentSchema);
