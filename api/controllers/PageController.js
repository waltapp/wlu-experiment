module.exports = {
  createAccount: function (req, res) {
	  res.view('page/createAccount');
  },
  login:function (req, res) {
	  res.view('page/login');
  }
};