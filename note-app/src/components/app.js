import { Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";
import Notes from "../routes/notes";
import Note from "../routes/note";

import { NotesProvider } from "../context/notes";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <NotesProvider>
        <div id="app">
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Notes path="/notes" />
            <Note path="/notes/:id" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </div>
      </NotesProvider>
    );
  }
}
