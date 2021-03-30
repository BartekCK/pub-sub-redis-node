import { ReadlineService } from './services/ReadlineService';

const readline = new ReadlineService();

readline.readlineExec();

process.on('exit', function () {
    console.log('App will close down ...');
});
