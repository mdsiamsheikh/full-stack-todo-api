const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://mdsiamsheikh6640:p6nYAe3LVBK6kMNQ@cluster0.bonhjwa.mongodb.net/?retryWrites=true&w=majority";
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(url, mongoOptions);

module.exports = client;
