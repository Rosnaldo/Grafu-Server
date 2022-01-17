import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.MONGO_HOST || '127.0.0.1:27017',
  db: process.env.MONGO_DB || 'coodesh',
  options: process.env.MONGO_OPTIONS || '',
  replicaSet: {
    status: process.env.MONGO_REPLICA_SET_STATUS || 'off',
    srv: process.env.MONGO_REPLICA_SET_SRV || 'off',
    hosts: process.env.MONGO_REPLICA_SET_HOSTS || '',
    name: process.env.MONGO_REPLICA_SET_NAME || 'rs0',
    options: process.env.MONGO_REPLICA_SET_OPTIONS || '',
  },
}));
