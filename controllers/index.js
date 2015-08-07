
// GET '/' - renders index page
module.exports.renderIndexView = function(req, res, next) {
  res.render('index', { title: 'WDInstagram' });
};