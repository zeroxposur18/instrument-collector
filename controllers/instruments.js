var Instrument = require('../models/instrument');
const User = require('../models/user');

module.exports = {
  index,
  create
};

async function index(req, res) {
  try{
      const instruments = await Instrument.find({});
      res.status(200).json(instruments);
  }
  catch(err){
      res.status(500).json(err);
  }
}

// async function create(req, res) {
//   console.log('user: ', req.user)
//   try {
//     const instrument = await Instrument.create(req.body);
//     res.status(201).json(instrument);
//   }
//   catch(err){
//     console.log(instrument);
//     res.status(500).json(err);
//   }
// }

async function create(req, res) {
  const instrument = await Instrument.create(req.body);
  res.status(201).json(instrument)
}