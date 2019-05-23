import React from 'react';
import './Favourite.css';

class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fav: false}
  }
  clickHandler = () => {
    this.setState((state) => ({
      fav: !state.fav
    }));
  }
  render() {
    return (
      <div onClick={this.clickHandler}>
        <i className={`${this.state.fav ? "fas red" : "far"} fa-heart favourite`}></i>
      </div>
    );
  }
}

export default Favourite;
