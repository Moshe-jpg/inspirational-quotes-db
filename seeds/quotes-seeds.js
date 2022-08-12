const { Post } = require('../models');

const quotedata = [
  {
    quote: 'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.',
    quoter: 'Will Ferrell',
    quote_id: "1",
    data_uploaded: "2022/7/09",
    category: "Funny",
    user_id: 10
  },
  {
    quote: "I never feel more alone than when I’m trying to put sunscreen on my back.",
    quoter: 'Jimmy Kimmel',
    quote_id: "2",
    data_uploaded: "2022/7/26",
    category: "Funny",
    user_id: 8
  },
  {
    quote: "I care about decency and humanity and kindness. Kindness today is an act of rebellion.",
    quoter: 'Pink',
    quote_id: "3",
    data_uploaded: "2022/7/10",
    category: "Soulful",
    user_id: 1
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    quoter: 'Michael Altshuler',
    quote_id: "4",
    data_uploaded: "2022/7/11",
    category: "Motivation",
    user_id: 4
  },
  {
    quote: 'Common sense is like deodorant. The people who need it most never use it.',
    quoter: 'Anonymous',
    quote_id: "5",
    data_uploaded: "2022/7/11",
    category: "Funny",
    user_id: 7
  },
  {
    quote: 'I’m at a place in my life when errands are starting to count as going out.',
    quoter: 'Anonymous',
    quote_id: "6",
    data_uploaded: "2022/7/08",
    category: "Funny",
    user_id: 4
  },
  {
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    quoter: 'Winston Churchill',
    quote_id: "7",
    data_uploaded: "2022/7/11",
    category: "Serious",
    user_id: 1
  },
  {
    quote: 'Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.',
    quoter: 'Lady Gaga',
    quote_id: "8",
    data_uploaded: "2022/7/11",
    category: "Motivation",
    user_id: 1
  },
  {
    quote: 'Here’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a statistician.',
    quoter: 'Adam Gropman',
    quote_id: "9",
    data_uploaded: "2022/7/11",
    category: "Funny",
    user_id: 9
  },
  {
    quote: 'Accept who you are. Unless you’re a serial killer.',
    quoter: 'Ellen DeGeneres',
    quote_id: "10",
    data_uploaded: "2022/7/14",
    category: "Funny",
    user_id: 5
  },
  {
    quote: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.',
    quoter: 'Ralph Waldo Emerson',
    quote_id: "11",
    data_uploaded: "2022/7/11",
    category: "Motivation",
    user_id: 3
  },
  {
    quote: 'Belief creates the actual fact.',
    quoter: 'William James',
    quote_id: "12",
    data_uploaded: "2022/7/12",
    category: "Serious",
    user_id: 10
  },
  {
    quote: 'Why do they call it rush hour when nothing moves?',
    quoter: 'Robin Williams',
    quote_id: "13",
    data_uploaded: "2022/7/18",
    category: "Funny",
    user_id: 8
  },
  {
    quote: 'If we’re going to pay this much for crab, it better sing and dance and introduce us to the Little Mermaid.',
    quoter: 'Claire Foster (Tina Fey), Date Night',
    quote_id: "14",
    data_uploaded: "2022/7/19",
    category: "Funny",
    user_id: 3
  },
  {
    quote: "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
    quoter: 'Ava DuVernay',
    quote_id: "15",
    data_uploaded: "2022/7/17",
    category: "Motivation",
    user_id: 3
  },
  {
    quote:
      'Not having the best situation, but seeing the best in your situation is the key to happiness.',
    quoter: 'Marie Forleo',
    quote_id: "16",
    data_uploaded: "2022/7/11",
    category: "Serious",
    user_id: 7
  },
  {
    quote: 'People say, ‘Facebook is a great way to connect with old friends.’ Well, at my age, if I want to connect with old friends I need a Ouija board.',
    quoter: 'Betty White',
    quote_id: "17",
    data_uploaded: "2022/7/16",
    category: "Funny",
    user_id: 6
  },
  {
    quote: 'The worst part of online shopping is having to get up and get your credit card from your purse.',
    quoter: 'Anonymous',
    quote_id: "18",
    data_uploaded: "2022/7/11",
    category: "Funny",
    user_id: 4
  },
  {
    quote: 'Weaknesses are just strengths in the wrong environment.',
    quoter: 'Marianne Cantwell',
    quote_id: "19",
    data_uploaded: "2022/7/11",
    category: "Motivation",
    user_id: 6
  },
  {
    quote: 'In a gentle way, you can shake the world.',
    quoter: 'Mahatma Gandhi',
    quote_id: "20",
    data_uploaded: "2022/7/11",
    category: "Serious",
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
