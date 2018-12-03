import React, { Component } from 'react';
import ControlsPhoto from './ControlsPhoto';
import '../Styles/ResultItem.css';

class ResultItem extends Component {
  render() {
    return (
      <figure className='result-item'>
        <div className="box-image"><img src={this.props.result.url_image} alt="" /></div>  
        <ControlsPhoto></ControlsPhoto>
        <figcaption>{this.props.mood.charAt(0).toUpperCase() + this.props.mood.slice(1)}</figcaption>
      </figure>
    );
  }
}

export default ResultItem;
