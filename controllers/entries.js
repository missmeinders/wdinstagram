var moment = require('moment');

// Controller for Entries

// GET '/' - renders entries index page
module.exports.renderEntriesIndex = function(req, res, next) {
  res.render(
    'entries/index',
    {
      title:   'WDInstagram',
      entries: [
        {
          id:         1,
          author:     'Joey B.',
          date_taken:  moment('2014-01-07').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/B1nnX3sIYAAYG9K.jpg:large'
        },
        {
          id:         2,
          author:     'Joey B.',
          date_taken: moment('2014-01-07').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/Braehh_CUAAzvh7.png:large'
        },
        {
          id:         3,
          author:     'Joey B.',
          date_taken: moment('2014-01-05').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/Bre4zM0CEAAuoao.png:large'
        },
        {
          id:         4,
          author:     'Joey B.',
          date_taken: moment('2015-01-01').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/BrkdehrCIAAtin-.jpg:large'
        },
        {
          id:         5,
          author:     'Joey B.',
          date_taken: moment('2014-12-31').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/BwdDaMzIUAE18In.png:large'
        },
        {
          id:         6,
          author:     'Joey B.',
          date_taken: moment('2014-12-29').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/BzHU3dDCEAI1lyX.jpg:large'
        },
        {
          id:         7,
          author:     'Joey B.',
          date_taken: moment('2014-12-25').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/B0zQ0v3CYAAlCle.jpg:large'
        },
        {
          id:         8,
          author:     'Joey B.',
          date_taken: moment('2014-12-20').format('MMM D, YYYY'),
          photo_url:  'https://pbs.twimg.com/media/B2K5DHmCcAMQUBv.jpg:large'
        }
      ]
    }
  );
};

module.exports.renderEntriesShow = function(req, res, next) {
  res.render(
    'entries/show',
    {
      title: 'WDInstagram',
      show:  true,
      entry: {
        id:         1,
        author:     'Joey B.',
        date_taken:  moment('2014-01-07').format('MMM D, YYYY'),
        photo_url:  'https://pbs.twimg.com/media/B1nnX3sIYAAYG9K.jpg:large'
      }
    }
  );
};

