import React from 'react';
import './DetailsText.css';

const info = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.";

class DetailsText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  clickHandler = () => {
    this.setState((state) => ({
      expanded: !state.expanded
    }))
  }

  render() {
    const text = info.split('\n').map((item, i ) => {
      return <p key={i}>{item}</p>;
    });
    const textSnippet = info.slice(0,300).split('\n').map((item, i ) => {
      return <p key={i}>{item+' ...'}</p>;
    });
    return (
      <div className={this.props.className}>
        <h2 className="details-heading">{this.props.heading}</h2>
        <div className="details-text">
          {this.state.expanded ? text : textSnippet}
        </div>
        <button className="more" onClick={this.clickHandler}>
          <p>{this.state.expanded ? "less" : "more"}</p>
          <i className={`fas fa-angle-${this.state.expanded ? "up" : "down"} more-icon`}></i>
        </button>
      </div>
    );
  }
}

export default DetailsText;
