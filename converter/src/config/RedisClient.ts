import { createClient, RedisClient as Client } from 'redis';

class RedisClient {
    private readonly client: Client;
    private readonly channelName: string;
    constructor() {
        if (!process.env.CHANEL_NAME) {
            throw new Error('Define all ENV');
        }
        this.client = createClient({ host: process.env.DV_HOST });
        this.channelName = process.env.CHANEL_NAME;
        this.client.on('message', (channel: string, message: string) => {
            console.log('Received data :' + message);
        });
    }

    subscribe() {
        console.log('Start subscribe ...');
        this.client.subscribe(this.channelName);
    }
}

export default new RedisClient();
