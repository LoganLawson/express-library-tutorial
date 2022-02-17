var mongoose = require('mongoose');

var Schema = mongoose.Schema; // constructor so capitalise

var GenreSchema = new Schema( {
  name: {type: String, required: true, minLength: 3, maxLength: 100}  
});

//virtual for url
GenreSchema
.virtual('url')
.get( function() {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);
