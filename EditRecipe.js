import React from "react";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default class EditRecipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      ingredients: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleIngredientChange(event) {
    this.setState({ ingredients: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(
      `https://itp404final-mbowen2.herokuapp.com/api/recipes/${this.props.match.params.recipeId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: this.state.title,
          ingredients: this.state.ingredients
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          title: "",
          ingredients: ""
        });

        toast.success(`Recipe for "${json.title}" was successfully updated`);
        this.props.history.push("/");
      });
  }

  componentDidMount() {
    const id = this.props.match.params.recipeId;
    fetch(`https://itp404final-mbowen2.herokuapp.com/api/recipes/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState(json);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ToastContainer />
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Title
          </label>

          <input
            type="title"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Ingredients
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            value={this.state.ingredients}
            onChange={this.handleIngredientChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    );
  }
}
