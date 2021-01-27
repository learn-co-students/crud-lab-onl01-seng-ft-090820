import React, { Component } from 'react';


class RestaurantInput extends Component {
  state={
    text: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.addRestaurant(this.state.text)
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

export default RestaurantInput;
