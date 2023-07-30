const mongoose = require('mongoose');

const testModelSchema = new mongoose.Schema({
testName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('testModel', testModelSchema);