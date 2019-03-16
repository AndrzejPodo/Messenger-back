module.exports = {
    port: 3000,
    dbConnectionString: 'mysql://root:litery98@127.0.0.1:3306/users',
    saltRounds: 2,
    jwtSecret: 'litery98',
    tokenExpireTime: '6h'
}