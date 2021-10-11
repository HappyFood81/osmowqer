const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const routesCustomer = require('./routes/customerAPI');

app.use(cors());
app.use(express.json());



app.use('/api/osmosis', routesCustomer);


const { MONGO_URI } = require('./config');
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));



const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server runnning at port ${port}`);
});


app.get("/", (req, res) => {
    console.log("running...")
});
