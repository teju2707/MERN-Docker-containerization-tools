import express from 'express';
import cors from 'cors';
import records from './routes/record.js';

const PORT = process.env.PORT || 5050;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define the /api/test endpoint
app.get('/api/test', (req, res) => {
    res.send('API Test Successful!');
});

// Use the records route
app.use('/record', records);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
