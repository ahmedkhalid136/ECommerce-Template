const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const routes = require('./router');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,

});
mongoose.connection.on('connected', function () {
    console.log('database is connected successfully');
});

app.use(routes);

app.listen(PORT, () => {
    console.log("Serve is running on Port " + PORT);
});
