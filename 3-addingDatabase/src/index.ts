import express from 'express'
import {prismaClient} from './db'

export const app = express();

app.use(express.json());


app.post('/sum',async(req,res)=>{
  const {a,b} = req.body;
  const ans = a + b;

  await prismaClient.request.create({
    data : {
      a : a,
      b : b,
      answer : ans,
      type : "Sum"
    }
  })
     // updating the code or adding branches , if you haven't written test for this you will  
     // end up decreasing the code coverage. for the updated code base the test should run atleast once.
    if(a > 1000000 || b > 1000000) {
      return res.status(422).json({
        message:"Sorry we don't support big numbers"
      })
    }
  res.json({
    answer : ans
  })
});

app.post('/multiply',async(req,res)=>{
    const {a,b} = req.body;
    const ans = a * b;
    await prismaClient.request.create({
      data : {
        a : a,
        b : b,
        answer : ans,
        type : "Multiply"
      }
    })
    res.status(200).json({
      answer : ans
    })
})