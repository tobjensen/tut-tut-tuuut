import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import Ferries from './Ferries';
import FerryDetails from './FerryDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Ferries} />
        <Route exact path="/ferry" component={FerryDetails} />
      </div>
    </Router>
  );
}

export default App;