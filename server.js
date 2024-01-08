const express = require('express');
const app = express();
const port = process.env.PORT || 3500;
//const hotelRouter = require('./routes/hotel.routes');
const connectToDatabase = require('./config/dbConfig');


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

//app.use('/api/hotels', hotelRouter);

connectToDatabase();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}   );


