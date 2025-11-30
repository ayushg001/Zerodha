const { Schema} = require('mongoose');

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim: true,
    },
    email :{
        type: String,
        required: true,
         unique: true,      // ensure unique email at DB level
        trim: true,
    },
     password: {
        type: String,
        required: true,
  },
})

module.exports = { UserSchema};