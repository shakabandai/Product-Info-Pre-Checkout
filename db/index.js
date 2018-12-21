var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productSelection');

//schema defines the structure of each document
var itemSchema = mongoose.Schema({
  _id: Number,
  price: String,
  totalRatings: Number,
  averageRating: Number,
  totalQuestions: Number,
  colors: [String],
  sizes: [String],
  quantityCanBuy: Number
});

//creates an instance of the document to match the schema
var Item = mongoose.model('Item', itemSchema);

//retrieves the item by id
var getItemById = function (id, callback) {
  Item.findById(id, callback);
}

//retrieves all items
var getAllItems = function(callback) {
  Item.find(callback);
}

module.exports.getItemById = getItemById;
module.exports.getAllItems = getAllItems;
module.exports.Item = Item;