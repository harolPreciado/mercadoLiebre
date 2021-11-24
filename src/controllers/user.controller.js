const {userModel} = require('../model')

const userController = {
    getUsers: function (req, res) {
        res.render('register'), { title: "Formulario" }
    },
    createUser: function (req, res) {
        const user = req.body
        userModel.createUser(user)
        //res.send(model.userModel.readUser())
        res.redirect('/register')

    },
    updateUser: function (req, res) {
        //const updateUser =req.body.email
        const update = {
            "nombre": "Andres",
            "apellido": "Preciado",
            "fechaNacimiento": [
                "2021-11-16",
                "Cundinamarca"
            ],
            "perfil": "comprar",
            "categoria": "vida",
            "avatar": "",
            "email": "harol.andres1999@gmail.com",
            "password": [
                "123456789Aa",
                "123456789Aa"
            ],
            "enviar": "enviar"
        }
        const email = "harol.andres1999@gmail.com";
        userModel.updateUser(email, update)
        res.send(model.userModel.readUser())
    },
    deleteUser: function (req, res) {
        const email = "harol.andres1999@gmail.com";
        userModel.deleteUser(email)
        res.send(model.userModel.readUser())
    },
}

module.exports = userController;