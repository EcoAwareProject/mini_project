const express = require("express");
const invasives = require("./model/invasive");
const plantsRoutes = require('./plantsRoutes');

const app = new express();


var cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(req,res){
    res.send("hello");
})

    app.post("/add",(req,res)=>{
        var donors = new invasives(req.body);//passing to DB
        donors.save();//save to DB
        })

app.get("/view",async (req,res)=>{
       var result = await invasives.find({});
       res.json(result);
    })
  

//  app.post("/admin/update",async (req,res)=>{
        
//         var result = await donor.findByIdAndUpdate(req.body._id,req.body);
//         res.send("success");
//     })
//  app.post("/admin/delete",async (req,res)=>{
//         var result=await donor.findByIdAndDelete(req.body._id);
//         res.send("deleted");
//     })
//     app.post("/admin/pending/delete",async (req,res)=>{
//         var result=await pending.findByIdAndDelete(req.body._id);
//         res.send("deleted");
//     })


app.use('/api/plants', plantsRoutes);

app.listen(6969,()=>{
    console.log("server running at port 6969")
})