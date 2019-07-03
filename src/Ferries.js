import React from 'react';
import axios from "axios";
import './Ferries.css';
import Search from './Search'
import Ferry from './Ferry'

class Ferries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    axios.get("https://ld8032comb.execute-api.ap-southeast-2.amazonaws.com/api")
      .then(res => {
        const data = res.data.data;
        this.setState((state) => ({
          data: data
        }));
      })
  }

  render() {
    const items = this.state.data.map((item, i) => (
      <Ferry key={i} {...item} />
    )); 

    return (
      <div className="ferries">
        <Search />
        {items}
      </div>
      );
  }
}

export default Ferries;
