const { Schema, Types } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtsId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      default: 'Unnamed thought',
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  
      thought: [thoughtSchema],
    },
    {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);


module.exports = thoughtSchema;
