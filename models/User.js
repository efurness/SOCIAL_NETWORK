const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
  
    friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],

    user: [userSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

postSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});
const User = model('user', userSchema);

module.exports = User;
