import React from 'react';

class Details extends React.Component {
  state = { expanded: false };

  clickHandler = () => {
    this.setState((state) => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const text = this.props.text.split('\n').map((item, i ) => {
      return <p key={i}>{item}</p>;
    });
    const textSnippet = this.props.text.slice(0,300).split('\n').map((item, i ) => {
      return <p key={i}>{item+' ...'}</p>;
    });
    return (
      <div className={this.props.className}>
        <h2 className="details__heading">{this.props.heading}</h2>
        <div className="details__text">
          {this.state.expanded ? text : textSnippet}
        </div>
        <button className="details__more" onClick={this.clickHandler}>
          <span>{this.state.expanded ? "less" : "more"}</span>
          <i className={`fas fa-angle-${this.state.expanded ? "up" : "down"} more-icon`}></i>
        </button>
      </div>
    )
  }
};

export default Details;
