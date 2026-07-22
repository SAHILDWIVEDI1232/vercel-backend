//start server
require('dotenv').config();//jb tk ye nhi likhoge tb tk jwt knuse nhui kr paoge as a env file 

const app=require('./src/app');
const connectDB=require('./src/db/db');

connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})