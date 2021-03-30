require('dotenv').config();

// configs
import redisClient from './config/RedisClient';

redisClient.subscribe();

process.on('SIGINT', function () {
    console.log('\nApp will close down ...');
    process.exit(0);
});
