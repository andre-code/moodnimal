import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/ControlsPhoto.css';

class ControlsPhoto extends Component {

  render() {
    return (
      <div className='controls-box'>
        <button value="favorite" name="favorite"><FontAwesomeIcon icon="heart" /></button>
        <button value="share" name="share"><FontAwesomeIcon icon="share-alt" /></button>
      </div>
    );
  }
}

export default ControlsPhoto;
