import React, { Component } from 'react';


class ReviewInput extends Component {
    state = {
    text: '',
    }

  handleOnChage = (e) => {
    this.setState({
      //  [e.target.name]: e.target.value
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({
      text: this.state.text,
      restaurantId: this.props.restaurantId
    })
    this.setState({
      text: '',
    })
  }
  
  render() {
    return (
      <div>
         <h3>Review Input</h3>
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <label>Review </label>
        <input 
          type="text"
          // name={this.state.text}
          value={this.state.text}
          onChange={this.handleOnChage}
          />
          <input type="submit" />
      </form>
      </div>
    );
  }
};
export default ReviewInput;
