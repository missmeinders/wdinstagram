var Entry = require('../models/entry');

module.exports.renderEntriesIndex = function(req, res, next) {
  Entry.find({}, function (err, entries) {
    res.render(
      'entries/index',
      {
        title:   'WDInstagram',
        entries: entries
      }
    );
  });
};

module.exports.renderEntriesShow = function(req, res, next) {
  Entry.findById(req.params.id, function(err, entry) {
    res.render(
      'entries/show',
      {
        title: 'WDInstagram',
        show:  true,
        entry: entry
      }
    );
  });
};

module.exports.renderEntriesNew = function(req, res, next) {
  res.render(
    'entries/new',
    {
      title: 'WDInstagram',
      show:  true
    }
  );
};

module.exports.renderEntriesCreate = function(req, res, next) {
  Entry.create(req.body.entry, function (err, entry) {
    if (err) {
      res.send('Something wrong happened: '+ err);
    } else {
      res.redirect('/entries/' + entry.id);
    }
  });
};
