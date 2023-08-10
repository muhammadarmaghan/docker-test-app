const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    sparse: true,
    trim: true,
    minlength: 6,
  },
  password: {
    type: String,
  },

  date_created: {
    type: Date,
  },
  date_updated: {
    type: Date,
  },

  is_deleted: {
    type: Boolean,
    default: false,
  },
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};
// User.index({'$**': 'text'});

module.exports = mongoose.model("User", User);
