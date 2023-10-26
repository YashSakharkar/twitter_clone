const express=require('express')
   const cors=require('cors')
   const { MongoClient, ServerApiVersion } = require('mongodb');
  const app=express()
  const port=process.env.PORT || 5000;


  app.use(cors());
  app.use(express.json());
  
const uri = "mongodb+srv://yashsakharkar8:ozy6D3rXpFxGtVJt@cluster0.zlaghbv.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   
   const postCOllection= client.db("databse").collection("post");
   const userCollection=client.db("databse").collection("user");
   const paymentCollection=client.db("databse").collection("payment");
    app.get('/post',async(req,res)=>{
        const post=(await postCOllection.find().toArray()).reverse();
        res.send(post);
    })
    app.get('/createuser',async(req,res)=>{
      const userresult=await userCollection.find().toArray();
      res.send(userresult);
  })
  app.get('/loginuser',async(req,res)=>{
    const email=req.query.email
    const user=(await userCollection.find({email:email}).toArray());
    res.send(user);
})
    app.post('/post',async(req,res)=>{
        const post=req.body;
      const result=await postCOllection.insertOne(post);
      res.send(result);
    })
    app.post('/createuser',async(req,res)=>{
      const user=req.body;
    const userresult=await userCollection.insertOne(user);
    res.send(userresult);
  })
  app.patch('/userUpdate/:email',async(req,res)=>{
    const filter=req.params;
    const porfile=req.body;
    const options={upsert:true};
    const updateDoc ={$set:porfile}
    const result =await userCollection.updateOne(filter,updateDoc,options);
    res.send(result)
  })
  app.get('/payment',async(req,res)=>{
    const payment=(await paymentCollection.find().toArray()).reverse();
    res.send(payment);
})
app.post('/payment',async(req,res)=>{
  const payment=req.body;
const result=await paymentCollection.insertOne(payment);
res.send(result);
})
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
 } catch(error){
       console.log(error)
    }
    
}
run().catch(console.dir);

  app.get('/',(req,res)=>{
     res.send("hello twittter world")
  })
  app.listen(port,()=>
    {
 console.log(`running succesfullt ${port}`)
    }
    
  )
   