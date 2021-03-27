import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import TrelloBoard from "./pages/TrelloBoard"

function Routes(){
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={TrelloBoard} />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;