const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const routesCustomer = require('./routes/customerAPI');
const routesMerchant = require('./routes/merchantAPI');
const routesMerchant2 = require('./routes/merchant2API');

app.use(cors());
app.use(express.json());



app.use('/api/osmosis/customer', routesCustomer);
app.use('/api/osmosis/merchant', routesMerchant);
app.use('/api/osmosis/merchant/raw', routesMerchant2);

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
