import { createClient, RedisClient as Client } from 'redis';

class RedisClient {
    private readonly client: Client;
    private readonly channelName: string;
    constructor() {
        if (!process.env.CHANEL_NAME) {
            throw new Error('Define all ENV');
        }
        this.client = createClient({ host: process.env.DB_HOST });
        this.channelName = process.env.CHANEL_NAME;
    }

    publish(msg: string) {
        this.client.publish(this.channelName, msg);
    }
}

export default new RedisClient();
