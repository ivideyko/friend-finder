var friendsData = require("../data/friendsData.js");

module.exports = function(APP) {
    
    APP.post("/api/friends/", function(req, res) {
        var userData = req.body;
        var userTotal = 0;
        var match = 0;
        var friendTotals = [];

        // Tally user's scores
        for(var i = 0; i < userData.scores.length; i++){
            userTotal += parseInt(userData.scores[i]);
        }

        // Tally possible friend's scores
        for (var i = 0; i < friendsData.length; i++) {
            var total = 0;
            var score = friendsData[i].scores;

            for (var k = 0; k < score.length; k++) {
                total += parseInt(score[k]);
            }

            friendTotals[i] = total;

            // Compare user's total score to each possible friend's total
            for (var j = 0; j < friendTotals.length; j++) {
                if(Math.abs(userTotal - friendTotals[j]) < Math.abs(userTotal - friendTotals[match])){
                    match = j;
                }
            }
        }

        res.json(friendsData[match]);
    });
};

