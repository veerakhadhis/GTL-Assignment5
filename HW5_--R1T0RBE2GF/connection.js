MongoClient client = new MongoClient("mongodb://127.0.0.1:27017/user"); // local database
var db = client.GetDatabase("user");

var reader = new StreamReader(client); // where <full path to csv> is the file path, of course
IMongoCollection<data> csvFile = db.GetCollection<data>("user");

reader.ReadLine(); // to skip header

while (!reader.EndOfStream)
{
    var line = reader.ReadLine();
    var values = line.Split(',');

        BsonDocument row = new BsonDocument
        {
            {"Country", values[3]},
            {"Confirmed", values[7]},
            {"Deaths", values[8]},
            {"Recovered", values[9]}
            {"Active", values[10]}
        };

    csvFile.InsertOne(row);
}