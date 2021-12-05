import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Contact from "./Contact";
import About from "./About";
import EditRecipe from "./EditRecipe";


export default class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <div className="container">
          <Navigation />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/recipes/:recipeId/edit" component={EditRecipe} />
            <Route path="/recipes/:recipeId" component={Recipe} />
            <Route path="/">
              <Recipes />
            </Route>
          </Switch>
        </div>
      </Router>
      </>
    
    );
  }
}
