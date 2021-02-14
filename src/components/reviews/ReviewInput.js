import React, { Component } from 'react';


class ReviewInput extends Component {
  

    state = {
    text: '',
    // review: '',

    }

  handleOnChage = (e) => {
    this.setState({
      //  [e.target.name]: e.target.value
      text: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    //console.log(e)
    e.preventDefault()
    this.props.addReview(this.state.text)
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
          <br/>
          {/* <input 
          type="text"
          name={this.state.text}
          value={this.state.name}
          onChange={this.handleOnChage}
          /> */}
      </form>
      <input type="submit" />
      </div>
    );
  }
};

export default ReviewInput;
