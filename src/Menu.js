import React, { Component } from "react";
import Item from './Item';

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {items: []}
  }

  componentDidMount() {
    fetch(
      'https://yws1b1vtl9.execute-api.us-east-1.amazonaws.com/Prod/'
    ).then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <header className='App-header'>
        <div>
          {this.state.items.map(
            item => <Item details={item} />
          )}
        </div>
      </header>
    )
  }
}

export default Menu;