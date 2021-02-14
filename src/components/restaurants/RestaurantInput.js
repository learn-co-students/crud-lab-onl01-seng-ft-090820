import React, { Component } from 'react';

class RestaurantInput extends Component {

    state = {
    text: ''
    }

  handelChange =(e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubmit = (e)=> {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Restaurant Input</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Restaurant Name</label>
          <input 
            type="text" 
            value={this.state.text} 
            onChange={this.handelChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
