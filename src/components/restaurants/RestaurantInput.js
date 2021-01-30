import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Restaruant Name: </label>
        <input
          type="text"
          name="restaurantName"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <input type="submit" />
      </form>
    );
  }
};


export default RestaurantInput;
