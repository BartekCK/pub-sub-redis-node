import fs from 'fs';

export class FileManager {
    constructor(private fileName: string) {}

    clearFile() {
        fs.truncate(this.fileName, 0, this.handleError);
    }
    appendToFile(msg: string) {
        fs.appendFile(this.fileName, `${msg}\n`, this.handleError);
    }

    private handleError(err: NodeJS.ErrnoException | null): void {
        if (err) {
            console.log(err);
        }
    }
}
