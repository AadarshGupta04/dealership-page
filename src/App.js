import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DealershipPage from "./DealershipPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* Set DealershipPage as the default route */}
        <Route exact path="/" component={DealershipPage} />
        {/* Add other routes here if needed */}
      </Switch>
    </Router>
  );
}

export default App;
