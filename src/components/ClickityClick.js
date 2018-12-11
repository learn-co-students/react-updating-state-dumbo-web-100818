// Code ClickityClick Component Here
import React, {Component} from 'react'

export default class ClickityClick extends Component{

  constructor(){
    super()
    this.state={
      hasBeenClicked: false
    }
  }

  handleClick = ()=>{
    this.setState({
      hasBeenClicked: true
    })
  }


  render(){
    return(
      <div>
        <p>I Have {this.state.hasBeenClicked === false ? null : "BEEN"} clicked</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }

}
