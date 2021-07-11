import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './extra.js';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Link to="/posting">
          <button id="buttons">Pet Scheduling</button>
        </Link>
        <Switch>
          <Route exact path="/posting" component={Hello} />
        </Switch>
      </Router>
    </div>
  );
}

/* const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Sadman:<password>@cluster0.mxm8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
