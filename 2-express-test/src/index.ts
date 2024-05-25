import express from 'express'

export const app = express();

app.use(express.json());


app.post('/sum',(req,res)=>{
  const {a,b} = req.body;
  const ans = a + b;
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

app.post('/multiply',(req,res)=>{
    const {a,b} = req.body;
    const ans = a * b;
    res.status(200).json({
      answer : ans
    })
})