function init_data()
{
  console.log("in main");
  //First read file
  var readline = require('readline');
  var fs = require('fs');

  var myFile = readline.createInterface({
    input: fs.createReadStream('companies.csv')
  });
  var entries = {"data":[]};
  myFile.on('line', function (line) {
    let string = line.split(",");
    let entry = "{'name': '" + string[0] + "'," + " 'ticker':'" + string[1] + "'},";
    entries.data += entry;
    console.log(entries.data);
  });

  // (testing purposes) CPzRnyUfB5hzdiTL cluster0 access pass for trishacox
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb+srv://trishacox:CPzRnyUfB5hzdiTL@cluster0-wuexi.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    const collection = client.db("hw13").collection("companies");
    collection.insertOne(entries, (err,res) => {
      if (err) {console.log("errors are things yeah")}
    });
    console.log("success connecting to database");
    client.close();
  });
  return;
}
module.exports = {init_data}
