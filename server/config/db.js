const mongoose = require('mongoose')
const config = require('config')
const { MongoMemoryServer } = require('mongodb-memory-server')
const c = require('config')


const mongo =  MongoMemoryServer.create()
const uri = config.get('mongoURI')

// Connect to db
const connectDB = async () => {
  // const mongo =  MongoMemoryServer.create()
  mongoose.set('strictQuery', true)
  const mongooseOpts = {
    useUnifiedTopology: true,
  }
  await mongoose.connect(uri, mongooseOpts)
  console.log('MongoDB is Connected...');
}

// Disconnect and close connection

const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongo.stop();
}

// clear the db, remove all data

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
}



// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', true);
//     await mongoose.connect(db, {
//       useNewUrlParser: true,
//     });
//     console.log('MongoDB is Connected...');
//   } catch ( err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// }

module.exports = { 
  connectDB,
  closeDatabase,
  clearDatabase};