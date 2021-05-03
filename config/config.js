import mongoCredentials from './../.mongoCredentials.js'

const config = {
    env: process.env.NODE_ENV || 'development',
    port: 3001,
    jwtSecret: "zubizarreta",
    mongoUri: "mongodb+srv://"+mongoCredentials+"?retryWrites=true&w=majority"
}

export default config