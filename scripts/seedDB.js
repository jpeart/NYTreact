const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactnyt",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    paper_id: 40231,
    web_url: 'http://nyt.com',
    pub_date: "14",
    headline: "NYT article",
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });