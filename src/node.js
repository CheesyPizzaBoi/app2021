const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log('Example app listening at somewhere'));

const uri =
  'mongodbsrv://Sadman:<mine1craft2>@cluster0.mxm8c.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(uri);
