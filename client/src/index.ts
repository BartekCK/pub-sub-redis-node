require('dotenv').config();

// services
import { ReadlineService } from './services/ReadlineService';

// repositories
import { MsgRepository } from './repositories/MsgRepository';

const readline = new ReadlineService(new MsgRepository());
readline.readlineExec();

process.on('exit', function () {
    console.log('\nApp will close down ...');
});
