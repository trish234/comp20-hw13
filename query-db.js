function query() {
  console.log("We're about to search for some data");
  let result = {};
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://trishacox:CPzRnyUfB5hzdiTL@cluster0-wuexi.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect((err) => {
    const collection = client.db("hw13").collection("companies");
    result = collection.findOne().then((result) => {
      client.close();
      console.log(result.data);
      return (result.data);
    })      
  });

}
//console.log(result);
//return the first entry you find
module.exports = {query}
