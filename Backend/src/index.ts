import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.json());
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
