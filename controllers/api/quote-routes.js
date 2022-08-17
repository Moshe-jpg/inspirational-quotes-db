const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Quote, User, } = require('../../models');


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
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbQuoteData => {
      if (!dbQuoteData) {
        res.status(404).json({ message: 'No Quote found with this id' });
        return;
      }
      res.json(dbQuoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
 
  Quote.create({
    quoter: req.body.quoter,
    quote: req.body.quote,
    user_id: req.session.user_id
  })
    .then(dbQuoteData => res.json(dbQuoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Quote.update(
    {
      quote: req.body.quote,
      quoter: req.body.quoter

    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbQuoteData => {
      if (!dbQuoteData) {
        res.status(404).json({ message: 'No Quote found with this id' });
        return;
      }
      res.json(dbQuoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Quote.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbQuoteData => {
      if (!dbQuoteData) {
        res.status(404).json({ message: 'No Quote found with this id' });
        return;
      }
      res.json(dbQuoteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
