import React from "react";
import { Route, Switch } from "react-router-dom";

// views imports
import Main from "./views/Main";
import Detail from "./views/Detail";

import "./App.css";


const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/people/" component={Main} />
        <Route path="/people/:id" component={Detail} />
      </Switch>
    </div>
  );
};

export default App;
