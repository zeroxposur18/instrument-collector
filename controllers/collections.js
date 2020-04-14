const User = require('../models/user')
const Instrument = require('../models/instrument')

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
}

async function index(req, res) {
    const collection = await User.collections.find({});
    res.status(200).json(collection);
}
async function show(req, res) {
    const collection = await User.collections.findById(req.params.id);
    res.status(200).json(collection);
}
async function create(req, res) {
    const collection = await User.collections.create(req.body);
    res.status(201).json(collection)
}
async function update(req, res) {
    const updatedCollection = await User.collections.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedCollection);
}
async function deleteOne(req, res) {
    const deleteCollection = await User.collections.finByIdAndRemove(req.params.id);
    res.status(200).json(deleteCollection);
}