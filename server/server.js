import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import chatRouter from './routes/chatRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import creditRouter from './routes/creditRoutes.js';
import { stripeWebhooks } from './controllers/webhooks.js';

const app = express();
await connectDB();


// Stripe webhooks

app.use('/api/stripe', express.raw({type:'application/json'}),stripeWebhooks)



// Middleware
app.use(cors())
app.use(express.json())

// Rooutes

app.get('/',(req, res)=>res.send('Server is Live!'))

app.use('/api/user',userRouter);
app.use('/api/chat',chatRouter);
app.use('/api/message',messageRouter)
app.use('/api/credit', creditRouter)

const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})
