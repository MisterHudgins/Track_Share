module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_Name || 'Track_Share',
        user: process.env.DB_USER || 'Track_Share',
        password: process.env.DB_PASS || 'Track_Share',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './Track_Share.sqlite',
            operatorsAliases: false
        }
    }
}
