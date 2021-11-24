const auth = {
    authMiddle: (req, res, next) => {
    console.log('Middle Funcionando')
    next();
    }
}
module.exports = auth;