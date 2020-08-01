import { MongoClient, Db } from 'mongodb';

import config from'../config';

let db: Db = null;
let client: MongoClient = null;

export const getDb = () => {
  if (db === null) {
    throw new Error("Must connect to DB before first access");
  }
  return db;
}

export const getClient = () => {
  if (client === null) {
    throw new Error("Must connect to DB before first access");
  }
  return client;
}

const connectToServer = async () => {
    const _client = await MongoClient.connect(config.database.uri, { useNewUrlParser: true, useUnifiedTopology: true });
    db = _client.db(config.database.name);
    client = _client;
}

export default connectToServer;
