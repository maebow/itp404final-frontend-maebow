import React from "react";
import { Link } from "react-router-dom";

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    document.title = "Recipes";
    fetch(
      "https://itp404final-mbowen2.herokuapp.com/api/recipes"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ recipes: json });
      });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.recipes.map((recipe) => {
            return (
              <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
