// import all models
const Quote = require('./Quote');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Quote, {
  foreignKey: 'user_id'
});

Quote.belongsTo(User, {
  foreignKey: 'user_id',
  //onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  //onDelete: 'SET NULL'
});

Comment.belongsTo(Quote, {
  foreignKey: 'quote_id',
  //onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  //onDelete: 'SET NULL'
});

Quote.hasMany(Comment, {
  foreignKey: 'quote_id'
});

module.exports = { User, Quote, Comment };
