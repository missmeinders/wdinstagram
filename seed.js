var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wdinstagram');

var Entry = require('./models/entry');

// callback style
Entry.remove({}, function(err) {
  if (err) console.log(err);
});

console.log("All entries removed...");

var newEntries = [
  {
    author:     'Joey B.',
    date_taken:  Date.parse('2014-01-07'),
    photo_url:  'https://pbs.twimg.com/media/B1nnX3sIYAAYG9K.jpg:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2014-01-07'),
    photo_url:  'https://pbs.twimg.com/media/Braehh_CUAAzvh7.png:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2014-01-05'),
    photo_url:  'https://pbs.twimg.com/media/Bre4zM0CEAAuoao.png:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2015-01-01'),
    photo_url:  'https://pbs.twimg.com/media/BrkdehrCIAAtin-.jpg:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2014-12-31'),
    photo_url:  'https://pbs.twimg.com/media/BwdDaMzIUAE18In.png:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2014-12-29'),
    photo_url:  'https://pbs.twimg.com/media/BzHU3dDCEAI1lyX.jpg:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2014-12-25'),
    photo_url:  'https://pbs.twimg.com/media/B0zQ0v3CYAAlCle.jpg:large'
  },
  {
    author:     'Joey B.',
    date_taken: Date.parse('2014-12-20'),
    photo_url:  'https://pbs.twimg.com/media/B2K5DHmCcAMQUBv.jpg:large'
  }
];

// promise style
Entry
  .create(newEntries)
  .then(
    function(entries) {
      console.log(entries.length + " entries seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
