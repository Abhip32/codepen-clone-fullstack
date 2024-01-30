import mongoose from 'mongoose';

class Database {
  constructor() {
    if (!Database.instance) {
      this._connect();
      Database.instance = this;
    }
    return Database.instance;
  }

  _connect() {
    mongoose.connect('mongodb://abhishek:12345677@ac-xkmxtmg-shard-00-00.u5vmbji.mongodb.net:27017,ac-xkmxtmg-shard-00-01.u5vmbji.mongodb.net:27017,ac-xkmxtmg-shard-00-02.u5vmbji.mongodb.net:27017/?ssl=true&replicaSet=atlas-mkwo69-shard-0&authSource=admin&retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);
    });
  }
}


const database = new Database();
export default database;
