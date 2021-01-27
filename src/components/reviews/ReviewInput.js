import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const review = {text: this.state.text, restaurantId: this.props.restaurantId}
    this.props.addReview(review)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text}/> 
          <input type="submit" />
        </form>
      </div>
    );
  }
};


export default ReviewInput;
