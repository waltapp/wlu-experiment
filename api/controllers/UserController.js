/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  create: function (req, res) {
	  //console.log(req);
    if (req.query.password !== req.query.confirmPassword) {
      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
    }
    var user={};
    console.log(req.query.password);
    user.password=req.query.password;
    user.email=req.query.email;
    User.create(user).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err});
      }
      // If user created successfuly we return user and token as response
      if (user) {
        // NOTE: payload is { id: user.id}
        res.json(200, {user: user, token: jwToken.issue({id: user.id})});
      }
    });
  }
  
};