import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./Streams/StreamCreate";
import StreamDelete from "./Streams/StreamDelete";
import StreamEdit from "./Streams/StreamEdit";
import StreamList from "./Streams/StreamList";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/new" component={StreamCreate} />
          <Route exact path="/streams/edit" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
          <Route exact path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
  // BrowserRouter can only have one output (<div></div>)
};

export default App;
