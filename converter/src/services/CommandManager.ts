// services
import { FileManager } from './FileManager';

export class CommandManager {
    private fileManager: FileManager;

    constructor() {
        if (!process.env.FILE_NAME) {
            throw new Error('Define file name in ENV');
        }
        this.fileManager = new FileManager(process.env.FILE_NAME);
    }

    handleMessage(msg: string) {
        if (msg.toLowerCase().trim() === 'clear') {
            this.fileManager.clearFile();
            return;
        }
        this.fileManager.appendToFile(msg);
    }
}
