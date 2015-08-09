var mongoose = require('mongoose');
var moment   = require('moment');

var formatDate = function(date_taken) {
  return moment(date_taken).format('MMM D, YYYY');
};

var entrySchema = new mongoose.Schema({
  author:     String,
  date_taken: {
    type:    Date,
    default: Date.now,
    get:     formatDate
  },
  photo_url:  String,
  likes:      {
    type:    Number,
    default: 0
  }
});

entrySchema.methods.html_formatted_likes = function() {
  return '<i class="fa fa-heart"></i> ' + this.likes +
         (this.likes === 1 ? ' like' : ' likes');
};

module.exports = mongoose.model('Entry', entrySchema);
