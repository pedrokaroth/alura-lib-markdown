import fileCatcher from './src/files-manager.js';
import validateUrls from './src/http-validate.js';

const path = process.argv;

async function processText(path) {
    const result = await fileCatcher(path[2]);

    if (path[3] === 'validate') {
        console.log('Links validados: ',await validateUrls(result))
    } else {
        console.log('Links', result);
    }
    
}

processText(path);