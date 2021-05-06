//mongoCredentials.js contains private password and is not synced with repo. Has to be recreated upon cloning
import {wholeStr, jwtSecret} from './.mongoCredentials.js' 

const config = {
    env: process.env.NODE_ENV || 'development',
    port: 3001,
    jwtSecret: jwtSecret,
    mongoUri: "mongodb+srv://"+wholeStr+"?retryWrites=true&w=majority"
}

export default config

/*  /config/.mongoCredentials.js

const mongoCredentials = {
    user: 'name',
    pass: 'word',
    uri: 'xxxxx.yyyyyy.mongodb.net',
    defaultDb: 'db-name'
}
const wholeStr = `${mongoCredentials.user}:${mongoCredentials.pass}@${mongoCredentials.uri}/${mongoCredentials.defaultDb}`
const jwtSecret = 'secretWord'
export default {wholeStr, jwtSecret}

*/