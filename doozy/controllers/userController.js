// NOTE: createUser and loginUser are in the indexController
var Team = require('../models/team');
var User = require('../models/user');


module.exports = {
  allUsers: function(req, res, next) {
    // send only _id and username
    User.find({}, '_id username', function(err, users) {
      if (err) return res.status(500).send();

      res.status(200).send(users);
    });
  },

  destroyUser: function(req, res, next) {
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    var teamname = req.body.teamname.trim();

    Team.findOne({name: teamname}, function(err, team) {
      if (!team) return res.status(401).send('Team does not exist');

      User.findOne({username: username}, function(err, user) {
        if (!user) return res.status(401).send('Username does not exist');

        user.comparePassword(password, function(match) {
          if (!match) return res.status(401).send('Password does not match');

          user.remove();
          res.status(200).send('Deleted');
        });
      });
    });
  }
};
