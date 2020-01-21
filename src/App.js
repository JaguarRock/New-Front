import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import AskBoard from "./component/Board/AskBoard";
import Discuss from "./component/Board/DiscussBoard";
import HotIssue from "./component/Board/HotIssueBoard";
import WriteBoard from './component/Board/WriteAskBoard';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/discuss" component={Discuss} />
          <Route path="/askboard" component={AskBoard} />
          <Route path="/hotissue" component={HotIssue} />
          <Route path="/write" component={WriteBoard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;