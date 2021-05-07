export default {
    port: process.env.PORT || 3000,
    host: process.env.MONGO_HOST || 'localhost',
    db: process.env.MONGO_DB || 'domicilios',
    URI: `${process.env.MONGO_HOST||'localhost'}/${process.env.MONGO_DB||'domicilios'}`
}