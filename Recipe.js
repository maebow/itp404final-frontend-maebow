import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      rating: 0
    };
  }

  componentDidMount() {
    document.title = "Recipe";
    const id = this.props.match.params.recipeId;
    fetch(
      `https://itp404final-mbowen2.herokuapp.com/api/recipes/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ recipe: json });
      });
  }

  deleteRecipe() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (!confirmDelete) {
      return;
    }

    fetch(
      `https://itp404final-mbowen2.herokuapp.com/api/recipes/${this.state.recipe.id}`,
      {
        method: "DELETE"
      }
    ).then((json) => {
      toast.success(`The recipe for "${this.state.recipe.title}" was deleted.`);
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.recipe.title}</h1>
        <p>ingredients: {this.state.recipe.ingredients}</p>
        <div className="btn-group">
          <Link
            className="btn btn-primary"
            to={`/recipes/${this.props.match.params.recipeId}/edit`}
          >
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            id="testDelete"
            onClick={() => {
              this.deleteRecipe();
            }}
          >
            Delete
          </button>
        </div>

        {/* insert rating system here: */}
        <StarRating
          value={this.state.rating}
          onClick={(rating) => {
            this.setState(
              { rating });
          }}
        >
          {({ onClick, isFilled }) => {
            return (
              <button type="button" className="btn btn-link" onClick={onClick}>
                <FontAwesomeIcon
                  icon={faStar}
                  color={isFilled ? "yellow" : "#bbb"}
                  size="1x"
                />
              </button>
            );
          }}
        </StarRating>
      </>
    );
  }
}
