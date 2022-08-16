const router = require('express').Router();
const {Quote,User,Comment}= require('../models');
const getAuth = require('../utils/auth');

router.get('/',getAuth,(req,res)=>{
    
    Quote.findAll({
        where:{
            user_id: req.session.user_id
        },
        attributes:[
            'id',
            'quote',
            'quoter',
            'created_at'
        ],
        include: [
            {
            model: Comment,
            attributes: ['id','comment_text','quote_id','user_id','created_at'],
            include:[
                {
                model: User,
                attributes: [
                    'username'
                ],
            }]

            }
        ]
    }).then(dbQuoteData => {
        const quotes= dbQuoteData.map(quote => quote.get({plain: true}));
        res.render('dashboard',{quotes, loggedIn: true});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/edit/:id', getAuth, (req, res) => {
    Quote.findByPk(req.params.id, {
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
        if (dbQuoteData) {
          const quote = dbQuoteData.get({ plain: true });
          
          res.render('edit-quote', {
            quote,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
  