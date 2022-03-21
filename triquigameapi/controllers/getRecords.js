const {Record} = require('../models');

module.exports = async() => {

    let games = await Record.findAll({
        atributes: ['winner', 'loser', 'date']
    });

    if(games.length>0){
        return games.map(g => {
            return {
                winner: g.winner,
                loser: g.loser,
                date: g.date,
            }
        });
    }
    return "There isn't historial games";
}