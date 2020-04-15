var Instrument = require('../models/instrument');
const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteOne,
  update,
  show
};

async function index(req, res) {
  const instruments = await Instrument.find({});
  res.status(200).json(instruments);
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

async function show(req, res) {
  const instrument = await Instrument.findById(req.params.id);
  res.status(200).json(instrument)
};

async function create(req, res) {
  const instrument = await Instrument.create(req.body);
  res.status(201).json(instrument)
}

async function deleteOne(req, res) {
  const deleteInstrument = await Instrument.findByIdAndRemove(req.params.id);
  console.log(deleteInstrument);
  res.status(200).json(deleteInstrument);
}

async function update(req,res) {
  const updateInstrument = await Instrument.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.status(200).json(updateInstrument)
}