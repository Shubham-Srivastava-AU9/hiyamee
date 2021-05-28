const express = require('express');
const connectDB = require('./config/db');


const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
// app.get('/',(req,res)=>{
//     res.json({msg:'hello world'})
// })
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobsRoutes'));


// Serve static assets in production


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
