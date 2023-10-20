const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://blcklamb:EqoxYHUXc5UHY9G3@1012-cluster-example.0wk12rf.mongodb.net/?retryWrites=true&w=majority";
const readline = require("readline");
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

async function main() {
  try {
    await client.connect();
    console.log("mongoDB 접속 성공");

    const collection = client.db("test").collection("people");

    await collection.insertOne({ name: "Celine", age: 27 });
    console.log("문서 추가 완료");

    const documents = await collection.find({ name: "Celine" }).toArray();
    console.log("documents: ", documents);

    await collection.updateOne({ name: "Celine" }, { $set: { age: 40 } });
    console.log("문서 업데이트 완료");

    const updateDocuments = await collection.find({ name: "Celine" }).toArray();
    console.log("updateDocuments: ", updateDocuments);

    // await collection.deleteOne({ name: "Celine" });
    // console.log("문서 삭제");

    await client.close();
  } catch (err) {
    console.error(err);
  }
}
async function post() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    await client.connect();
    console.log("mongoDB 접속 성공");

    const collection = client.db("test").collection("posts");

    await collection.insertOne({
      title: "Auto created title",
      name: "blcklamb",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, corrupti! Non deserunt quibusdam sapiente molestiae nulla dicta. Dolorem, cupiditate totam, sit omnis numquam quam, optio odio iste beatae saepe fuga.",
      createdAt: Date.now(),
    });
    console.log("문서 추가 완료");

    const documents = await collection.find().toArray();
    console.log("documents: ", documents);

    await client.close();
  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
  }
}

// run().catch(console.dir);
// main();
post();
