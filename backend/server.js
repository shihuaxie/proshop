import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import {notFound, errorHandler} from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB(); //connect to mongoDB

const app = express();

app.get('/', (req, res)=>{
    res.send('api is running on 5000')
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server running on port ${port}`))
