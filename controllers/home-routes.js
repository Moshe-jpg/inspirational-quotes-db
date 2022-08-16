const router = require('express').Router();
const { Quote, User, Comment } = require('../models');


router.get('/', (req, res) => {
  
  Quote.findAll({
    attributes: [
      'id',
      'quote',
      'quoter',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'quote_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbQuoteData => {
      const quotes = dbQuoteData.map(quote => quote.get({ plain: true }));

      res.render('homepage', {
        quotes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single quote
router.get('/quote/:id', (req, res) => {
  Quote.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'quote',
      'quoter',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'quote_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbQuoteData => {
      if (!dbQuoteData) {
        res.status(404).json({ message: 'No quote found with this id' });
        return;
      }

      const quote = dbQuoteData.get({ plain: true });

      res.render('single-quote', {
        quote,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
