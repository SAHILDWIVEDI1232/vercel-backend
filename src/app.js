//create server
const express=require('express');
const cookieParser=require('cookie-parser');
const authRoutes=require('./routes/auth.routes');//isse pta chlega ki post kr rhe hain woh server ko pta chle
const foodRoutes=require("./routes/food.routes")
const foodPartnerRoutes=require("./routes/food-partner.routes")
const cors=require('cors');

const app=express();
/*app.use(cors({
    //origin:"http://localhost:5173", kyuki create food me arror aa rha hai 
   
    credentials:true

}));*/

// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"],
//   credentials: true
// }));
// app.use(cors({
//   origin: "https://vercel-frontend-ashy-alpha.vercel.app",
//   credentials: true
// }));



// app.use(cookieParser());
// //middleware for reading data from req.body
// app.use(express.json());



// //dummy route
// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })
// app.use('/api/auth',authRoutes)
// app.use('/api/food',foodRoutes)
// app.use('/api/food-partner',foodPartnerRoutes)
// module.exports=app;



const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const foodRoutes = require("./routes/food.routes");
const foodPartnerRoutes = require("./routes/food-partner.routes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://vercel-frontend-eight-brown.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/food-partner', foodPartnerRoutes);

module.exports = app;
