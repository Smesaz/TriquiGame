const {Record} = require('../models');

module.exports = async(winner, loser, date) => {
    if(winner && loser && date){
        await Record.create({
            winner: winner,
            loser: loser,
            date: date,
        });
    
        return "Game saved";
    }
    else return "Error saving the game";
}