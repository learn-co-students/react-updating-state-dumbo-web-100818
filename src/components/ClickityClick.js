// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {

  state = {
    hasBeenClicked: false,
    currentTheme: 'blue'
  }

  handleClick = () => {
    if (this.state.hasBeenClicked === false){
      this.setState({
        hasBeenClicked: true
      })
    } else {
      this.setState({
        hasBeenClicked: false
      })
    }

  }



  render(){
    return (
      <div>
        <p>I have
        {this.state.hasBeenClicked? null : ' not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
