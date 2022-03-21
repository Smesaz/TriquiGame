const {Record} = require('../models');

module.exports = async() => {
    let games = await Record.findAll({
        atributes: ['winner', 'loser', 'date']
    });

    if(games.lengtth>0){
        return games;
    }
    return "There isn't historial games";
}