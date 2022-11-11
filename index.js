import express  from "express";
const app = express()
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"



//MIDLEWARES
app.use(express.json())//Allows us to receive json

app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/comments',commentRoutes);
app.use('/api/likes',likeRoutes);

//Listen
app.listen(8888,()=>{
    console.log("API working...")
});