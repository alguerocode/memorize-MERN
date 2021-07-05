const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },

}, { timestamps: true })

const postMessage = mongoose.model('post', postSchema);
module.exports = postMessage;