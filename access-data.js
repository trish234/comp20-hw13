//First read file
var readline = require('readline');
var fs = require('fs');

var myFile = readline.createInterface({
  input: fs.createReadStream('companies.csv')
});
console.log("read file");
myFile.on('line', function (line) {
  console.log('"' +  line + '" has ' + line.length + ' characters');
});

function main()
{
  console.log("in main");
  // (testing purposes) CPzRnyUfB5hzdiTL cluster0 access pass for trishacox
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://trishacox:CPzRnyUfB5hzdiTL@cluster0-wuexi.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("hw13").collection("companies");
    collection.insertOne(newData, (err,res) => {
      if (err) {console.log("errors are things yeah")}
      console.log("new document inserted");
    });
    console.log("success connecting to database");
    client.close();
  });
}
module.exports = {main};
