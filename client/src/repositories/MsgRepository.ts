// interfaces
import { IMsgRepository } from '../interfaces';

// configs
import redisClient from '../config/RedisClient';

export class MsgRepository implements IMsgRepository {
    publishMessage(msg: string): void {
        redisClient.publish(msg);
    }
}
