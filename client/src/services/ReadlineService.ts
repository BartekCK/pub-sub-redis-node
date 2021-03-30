import { createInterface, Interface } from 'readline';

// interfaces
import { IMsgRepository } from '../interfaces';

export class ReadlineService {
    private readonly readLine: Interface;

    constructor(private readonly msgRepository: IMsgRepository) {
        this.readLine = createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        this.readLine.on('close', () => {
            console.log('ReadlineService close');
            process.exit(0);
        });
    }

    readlineExec() {
        this.readLine.question('Give me task\n', (result: string) => {
            if (result === 'close') {
                this.readLine.close();
            }
            this.msgRepository.publishMessage(result);
            this.readlineExec();
        });
    }
}
