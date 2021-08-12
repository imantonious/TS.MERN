import React from "react";
import { Route, Switch } from "react-router-dom";

// views imports
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/people/" component={Main} />
        <Route exact path="/people/:id" component={Detail} />
        <Route exact path="/people/:id/edit" component={Update} />
      </Switch>
    </div>
  );
};

export default App;
