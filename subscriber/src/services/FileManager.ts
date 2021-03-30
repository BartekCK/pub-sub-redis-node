import fs from 'fs';
import { join } from 'path';

export class FileManager {
    private filePath: string = join('../', this.fileName);

    constructor(private fileName: string) {}

    clearFile() {
        fs.truncate(this.filePath, 0, this.handleError);
    }
    appendToFile(msg: string) {
        fs.appendFile(this.filePath, `${msg}\n`, this.handleError);
    }

    private handleError(err: NodeJS.ErrnoException | null): void {
        if (err) {
            console.log(err);
        }
    }
}
