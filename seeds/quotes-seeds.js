const Quote = require('../models/Quote.js');

const quotedata = [
  {
    quote: 'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.',
    quoter: 'Will Ferrell',
    user_id: 10
  },
  {
    quote: "I never feel more alone than when I’m trying to put sunscreen on my back.",
    quoter: 'Jimmy Kimmel',
    user_id: 8
  },
  {
    quote: "When you have a dream, you've got to grab it and never let go.",
    quoter: 'David Goggins',
    user_id: 1
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    quoter: 'Michael Altshuler',
    user_id: 4
  },
  {
    quote: 'Common sense is like deodorant. The people who need it most never use it.',
    quoter: 'Anonymous',
    user_id: 7
  },
  {
    quote: 'I’m at a place in my life when errands are starting to count as going out.',
    quoter: 'Anonymous',
    user_id: 4
  },
  {
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    quoter: 'Winston Churchill',
    user_id: 1
  },
  {
    quote: 'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.',
    quoter: 'Lady Gaga',
    user_id: 1
  },
  {
    quote: 'Here’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a statistician.',
    quoter: 'Adam Gropman',
    user_id: 9
  },
  {
    quote: 'Accept who you are. Unless you’re a serial killer.',
    quoter: 'Ellen DeGeneres',
    user_id: 5
  },
  {
    quote: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.',
    quoter: 'Ralph Waldo Emerson',
    user_id: 3
  },
  {
    quote: 'MBelief creates the actual fact.',
    quoter: 'William James',
    user_id: 10
  },
  {
    quote: 'Why do they call it rush hour when nothing moves?',
    quoter: 'Robin Williams',
    user_id: 8
  },
  {
    quote: 'If we’re going to pay this much for crab, it better sing and dance and introduce us to the Little Mermaid.',
    quoter: 'Claire Foster (Tina Fey), Date Night',
    user_id: 3
  },
  {
    quote: "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
    quoter: 'Ava DuVernay',
    user_id: 3
  },
  {
    quote:
      'Not having the best situation, but seeing the best in your situation is the key to happiness.',
    quoter: 'Marie Forleo',
    user_id: 7
  },
  {
    quote: 'People say, ‘But Betty, Facebook is a great way to connect with old friends.’ Well, at my age, if I want to connect with old friends I need a Ouija board.',
    quoter: 'Betty White',
    user_id: 6
  },
  {
    quote: 'The worst part of online shopping is having to get up and get your credit card from your purse.',
    quoter: 'Anonymous',
    user_id: 4
  },
  {
    quote: 'Weaknesses are just strengths in the wrong environment.',
    quoter: 'Marianne Cantwell',
    user_id: 6
  },
  {
    quote: 'In a gentle way, you can shake the world.',
    quoter: 'Mahatma Gandhi',
    user_id: 7
  }
];

const seedQuotes = () => Quote.bulkCreate(quotedata);

module.exports = seedQuotes;
