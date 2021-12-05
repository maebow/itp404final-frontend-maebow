import React from "react";
import PropTypes from "prop-types";

export default class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        date: new Date(),
        showDate: false
    };

    this.show=this.show.bind(this);
  }

  show(){
    this.setState({showDate: true});
    return <p>{this.state.date.toString()}</p>; 
  }
  

  render() {
    const stars = [];

    const { starCount = 5 } = this.props;
    // const starCount = this.props.starCount || 5;

    for (let i = 1; i <= starCount; i++) {
      stars.push(
        <Star
          starValue={i}
          starRatingValue={this.props.value}
          key={i}
          onClick={this.props.onClick}
          renderStar={this.props.children}
        />
      );
    }

    return <>{stars}</>;
  }
}

StarRating.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.func
};

class Star extends React.Component {
  render() {
    return this.props.renderStar({
      onClick: () => {
        const clickedStarValue =
          this.props.starValue === this.props.starRatingValue
            ? 0
            : this.props.starValue;
        this.props.onClick(clickedStarValue);
        this.show();
      },
      isFilled: this.props.starValue <= this.props.starRatingValue
    });
  }
}
