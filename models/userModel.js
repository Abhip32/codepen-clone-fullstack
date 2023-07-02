import mongoose from 'mongoose';
var Schema = mongoose.Schema;


const userSchema = new Schema({
  name: { type: String, required: true },
  img:  {type:Buffer},
  email: { type: String, required: true},
  password: { type: String, required: true}
  
});

const users =  mongoose.models?.users ||mongoose.model('users', userSchema);

export default users;