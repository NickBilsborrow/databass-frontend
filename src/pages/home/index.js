import React from "react";
import { PageContainer } from "../../styledComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "../../components/Header";
import { Watchlist } from "../../components/Watchlist";
import { Watched } from "../../components/Watched";
import { Add } from "../../components/Add";
import "../../App.css";
import "../../lib/font-awesome/css/all.min.css";
import { Settings } from "../settings";

import { GlobalProvider } from "../../context/GlobalState";

export const Home = () => {
  return (
    <PageContainer>
      <GlobalProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/">
              <Watchlist />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/watched">
              <Watched />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </PageContainer>
  );
};