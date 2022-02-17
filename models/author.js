var mongoose = require('mongoose');

var Schema = mongoose.Schema; // constructor so capitalise

var AuthorSchema = new Schema (
  {
    first_name: {type: String, required: true, maxLength: 100},
    family_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
  }
);

// create virtual to supply full name
// dot notation
AuthorSchema
.virtual('name')
.get(function() { //i think: get will execute this function when the name is requested??
  // handle errors by returning an empty string when missing first or family name

  full_name = ''; //full name  = ' ' unless following
  if (this.first_name && this.family_name) {
    full_name = this.family_name + ', ' + this.first_name
  }
  if (!this.first_name || !this.family_name) {
    full_name = '';
  }
  return full_name;
});

// create virtual to supply author lifespan
AuthorSchema
.virtual('lifespan')
.get(function() {
  var lifetime_string = '';
  if(this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  lifetime_string += ' - ';
  if(this.date_of_death) {
    lifetime_string += this.date_of_death.getYear();
  }
  return lifetime_string;
});

// virtual for authors url
AuthorSchema
.virtual('url')
.get( function() {
  return '/catalog/author/' + this._id;
});


//export model
module.exports = mongoose.model('Author', AuthorSchema);
