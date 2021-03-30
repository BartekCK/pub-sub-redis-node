import { createInterface, Interface } from 'readline';

export class ReadlineService {
    private readonly readLine: Interface;

    constructor() {
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
            console.log('Your answer ' + result);
            this.readlineExec();
        });
    }
}
