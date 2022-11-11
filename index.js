import Express  from "express";
const app = Express()
import userRoutes from "./routes/users.js"



//MIDLEWARES
app.use('/api/users',userRoutes);
//Listen
app.listen(8888,()=>{
    console.log("API working...")
});