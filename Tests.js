import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StarRating from "./StarRating";
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import Contact from "./Contact";
import About from "./About";
import EditRecipe from "./EditRecipe";

test("rendering 5 empty stars", () => {
    // Arrange
    const rating = 0;
    const onClick = () => {};
  
    // Act
    const { getAllByTestId } = render(
      <StarRating value={rating} onClick={onClick}>
        {({ onClick, isFilled }) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              data-testid="star"
              onClick={onClick}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size="3x"
                data-testid={isFilled ? "filled-star" : "empty-star"}
              />
            </button>
          );
        }}
      </StarRating>
    );

// Assert
expect(getAllByTestId("empty-star").length).toBe(5);
});

test("clicking on an empty star", () => {
    // Arrange
    const rating = 1;
    const onClick = jest.fn(); // spy, stub, mock
  
    // Act
    const { getAllByTestId } = render(
      <StarRating value={rating} onClick={onClick}>
        {({ onClick, isFilled }) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              data-testid="star"
              onClick={onClick}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size="3x"
                data-testid={isFilled ? "filled-star" : "empty-star"}
              />
            </button>
          );
        }}
      </StarRating>
    );

    const thirdStar = getAllByTestId("star")[2];
    fireEvent.click(thirdStar);
  
    // Assert
    expect(onClick).toHaveBeenCalledWith(3);
});

test("submit clicked on contact page", () => {
    // Arrange
    const onClick = jest.fn(); // spy, stub, mock
  
    // Act
    const { getAllByTestId } = render(
      <Contact data-testid="handleSubmitContact">
        {({ onClick, handleSubmit }) => {
          return (
            toast.success(`The recipe for "${this.state.recipe.title}" was deleted.`)
          );
        }}
      </Contact>
    );

    const handleSubmit = getAllByTestId("handleSubmitContact");
    fireEvent.click(thirdStar);
  
    // Assert
    expect(onClick).toHaveBeenCalledWith(handleSubmit);
});

test("update clicked on editRecipe page", () => {
    // Arrange
    const onClick = jest.fn(); // spy, stub, mock
  
    // Act
    const { getAllByTestId } = render(
      <EditRecipe data-testid="handleSubmit">
        {({ onClick, handleSubmit }) => {
          return (
            toast.success(`Recipe for "${json.title}" was successfully updated`)
          );
        }}
      </EditRecipe>
    );

    const handleSubmit = getAllByTestId("handleSubmitRecipe");
    fireEvent.click(handleSubmit);
  
    // Assert
    expect(onClick).toHaveBeenCalledWith(handleSubmit);
});

test("clicking on delete button", () => {
    // Arrange
    const recipe = "French Toast";
    const onClick = jest.fn(); // spy, stub, mock
    const confirmDelete = window.confirm(
        "Are you sure you want to delete this post?"
    );
  
    // Act
    const { getAllByTestId } = render(
      <Recipe value={recipe} onClick={onClick} data-testid="testDelete">
        {({ onClick, deleteRecipe }) => {
          return (
            confirmDelete
          );
        }}
      </Recipe>
    );

    const testDelete = getAllByTestId("testDelete");
    fireEvent.click(testDelete);
  
    // Assert
    expect(onClick).toHaveBeenCalledWith(deleteRecipe);
});

test("rendering 3 filled stars and 2 empty stars", () => {
    // Arrange
    const rating = 3;
    const onClick = () => {};
  
    // Act
    const { getAllByTestId } = render(
      <StarRating value={rating} onClick={onClick}>
        {({ onClick, isFilled }) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              data-testid="star"
              onClick={onClick}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size="3x"
                data-testid={isFilled ? "filled-star" : "empty-star"}
              />
            </button>
          );
        }}
      </StarRating>
    );
  
    // Assert
    expect(getAllByTestId("filled-star").length).toBe(3);
    expect(getAllByTestId("empty-star").length).toBe(2);
  });
  
  test("clicking on an empty star", () => {
    // Arrange
    const rating = 1;
    const onClick = jest.fn(); // spy, stub, mock
  
    // Act
    const { getAllByTestId } = render(
      <StarRating value={rating} onClick={onClick}>
        {({ onClick, isFilled }) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              data-testid="star"
              onClick={onClick}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size="3x"
                data-testid={isFilled ? "filled-star" : "empty-star"}
              />
            </button>
          );
        }}
      </StarRating>
    );
  
    const thirdStar = getAllByTestId("star")[2];
    fireEvent.click(thirdStar);
  
    // Assert
    expect(onClick).toHaveBeenCalledWith(3);
  });
  
  test("clicking on a filled star", () => {
    // Arrange
    const rating = 3;
    const onClick = jest.fn(); // spy, stub, mock
  
    // Act
    const { getAllByTestId } = render(
      <StarRating value={rating} onClick={onClick}>
        {({ onClick, isFilled }) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              data-testid="star"
              onClick={onClick}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size="3x"
                data-testid={isFilled ? "filled-star" : "empty-star"}
              />
            </button>
          );
        }}
      </StarRating>
    );
  
    const thirdStar = getAllByTestId("star")[2];
    fireEvent.click(thirdStar);
  
    // Assert
    expect(onClick).toHaveBeenCalledWith(0);
  });
  
  test("rendering a specified number of stars", () => {
    // Arrange
    const rating = 2;
    const onClick = () => {};
    const starCount = 10;
  
    // Act
    const { getAllByTestId } = render(
      <StarRating starCount={starCount} value={rating} onClick={onClick}>
        {({ onClick, isFilled }) => {
          return (
            <button
              type="button"
              className="btn btn-link"
              data-testid="star"
              onClick={onClick}
            >
              <FontAwesomeIcon
                icon={faStar}
                color={isFilled ? "yellow" : "#bbb"}
                size="3x"
              />
            </button>
          );
        }}
      </StarRating>
    );
  
    // Assert
    expect(getAllByTestId("star").length).toBe(10);
  });
  