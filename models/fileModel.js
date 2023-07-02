import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const fileSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required:true },
  html: { type: String, required: false },
  css: { type: String, required: false },
  js: { type: String, required: false },
});

const files =  mongoose.models?.files ||mongoose.model('files', fileSchema);

export default files;