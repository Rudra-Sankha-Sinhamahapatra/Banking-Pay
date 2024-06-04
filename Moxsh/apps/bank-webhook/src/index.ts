import express from "express";
import db from "@repo/db/client";

const app = express();
const PORT=3003;
//will do zod validation soon
//will check if this request actually came from hdfc bank, have to use a webhook secret here

app.post("/hdfcwebhook", async (req, res) => {
  const paymentInformation :{
   token: string;
   userId:string;
   amount:string
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  }

  //transanctions
try {
 await db.$transaction([
     db.balance.updateMany({
    where: {
      userId: Number(paymentInformation.userId),
    },
    data: {
      amount: {
        increment: Number(paymentInformation.amount),
      },
    },
  }),

  db.onRampTransanction.updateMany({
    where: {
      token: paymentInformation.token,
    },
    data: {
      status: "Success",
    },
  })
]);

res.status(200).json({
    message:"Captured"
  })
  
}catch(e){
    console.error(e);
    res.status(411).json({
        message:"Error while processing webhook"
    })
}
});

app.listen((PORT),()=>{
    console.log(`Webhook Running on PORT ${PORT}`);
});
