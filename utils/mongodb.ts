import { MongoClient } from 'mongodb';
import { uri } from './mongodbInMemory';

// Connection URL
const url = process.env.NODE_ENV == 'development' && uri !== false ? uri : process.env.MONGODB as string;
export const client = new MongoClient(url);