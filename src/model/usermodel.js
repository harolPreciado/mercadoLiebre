const fs = require('fs');
const path = require('path');

const userModel = {

    isExist: function(email){
        const isExist = this.readUser().find(item => item.email === email)
        if (isExist) {
            return true;
        }else{
            return false;
        }
    },

    readUser: function () {
    return JSON.parse(fs.readFileSync(path.join(__dirname, './users.json'),{ encoding: 'utf8'}));
    },

    createUser: function (user) {
        const users = this.readUser();
        if(this.isExist(user.email)){
            return 'Ya existe un usuario registrado con este email'
        }
        users.push(user);
        fs.writeFileSync(path.resolve(__dirname, './users.json'), JSON.stringify(users, null, 4), { encoding: 'utf8' });
        return "Usuario creado correctamente"
    },

    deleteUser: function(email) {
        const newdb = this.readUser().filter(user => user.email !== email);
        fs.writeFileSync(path.resolve(__dirname, './users.json'), JSON.stringify(newdb, null, 4), { encoding: 'utf8' });
    },

    updateUser: function(email, user) {
        const emailBuscado = this.readUser().findIndex(user => user.email == email);
        if(emailBuscado<0){
            return "No existe el usuario en la base de datos"
        }
        let newdb = this.readUser();
        newdb[emailBuscado] = user;
        fs.writeFileSync(path.resolve(__dirname, './users.json'), JSON.stringify(newdb, null, 4), { encoding: 'utf8' });
        return `El usuario ${user.nombre} ha sido registrado`;
    }
};

module.exports = userModel;