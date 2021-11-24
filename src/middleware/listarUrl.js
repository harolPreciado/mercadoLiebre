const fs = require('fs');
const path = require('path');

listarUrl = (req, res, next) =>{
    const url = req.url;
    const listaUrl = JSON.parse(fs.readFileSync(path.join(__dirname, './listaUrl.json'),{ encoding: 'utf8'}));
    listaUrl.push(url);
    fs.writeFileSync(path.resolve(__dirname, './listaUrl.json'), JSON.stringify(listaUrl, null, 4), { encoding: 'utf8' });
    next();
}

module.exports = listarUrl;