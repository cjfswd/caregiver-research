import { MongoMemoryServer } from 'mongodb-memory-server';

// This will create an new instance of "MongoMemoryServer" and automatically start it
const mongod = process.env.NODE_ENV == 'development' && await MongoMemoryServer.create()

export const uri = mongod && mongod.getUri()
