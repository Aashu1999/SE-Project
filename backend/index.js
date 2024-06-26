const dotenv = require("dotenv");
dotenv.config({ path: __dirname+'/.env' });
require("./mongoose")


const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors=require("cors");

const allowedDomains=["http://localhost:3000","http://localhost:3001","http://localhost:3002","http://localhost:3003"]
app.use(cors());


const librarianRoutes = require("./routes/librarianRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/CartRoutes")
const historyRoutes = require("./routes/HistoryRoutes")
const submitRoutes = require("./routes/SubmissionRoutes")
const feedbackRoutes = require("./routes/FeedbackRoutes")
const NodeMailerSend = require("./routes/NodeMailerRoute") 
const Publication = require("./routes/PublicationRoutes")




app.use("/librarian",librarianRoutes);
app.use("/auth",authRoutes);
app.use("/cart", cartRoutes)
app.use("/reserved", historyRoutes)
app.use("/submit", submitRoutes)
app.use("/feedback", feedbackRoutes)
app.use("/nodemailer", NodeMailerSend)
app.use("/publication", Publication)





app.all("/*",(req,res)=>{
    res.send("page not found");
});

//port listening at in the server
app.listen(3002, ()=>{
    console.log("running on port " + 3002); 
}); 
