import React, { Component } from 'react';
import firebase from './firebase';
import '../Styles/ResultBox.css';
import ResultItem from './ResultItem';

class ResultBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
          allphotos: [],
          mood: this.props.mood,
          moods: this.props.moods
      }
      this.filterPhotos = this.filterPhotos.bind(this);
  }

  componentDidMount() {

    // preparing to get data from  firestore
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
    const photosArray = [];
     
    // calling firestore
    firestore.collection('photos').get()
    .then((snapshot) => {
        snapshot.forEach((doc) => {
            photosArray.push({id: doc.id, 
                            id_mood:doc.data().id_mood, 
                            url_image:doc.data().url_image});
        });
        this.setState({ allphotos: photosArray });
    })
    .catch((err) => console.log('Error getting documents', err) );
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(this.state.allphotos !== nextState.allphotos, this.state.mood !== nextState.mood, this.state.moods !== nextState.moods,  "Cambió el estado de photos or mood or moods?")
    return (this.state.allphotos !== nextState.allphotos) || this.state.mood !== nextState.mood || this.state.moods !== nextState.moods
  } 

  filterPhotos = ( item ) => {
    if(this.state.mood === "" ) {
        return true;  
    } else {
       return item.id_mood === this.state.mood;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mood !== nextProps.mood) {
        this.setState({
          mood: nextProps.mood
        });
    }
    if (this.props.moods !== nextProps.moods) {
        this.setState({
          moods: nextProps.moods
        });
    }
  }

  render() {
    const moodsArr = this.state.moods;
    return (
      <div className="result-box">
        <ul className="result-list"> 
            {this.state.allphotos.filter( this.filterPhotos ).map( result => {
                let index = moodsArr.findIndex(x =>  x.id === result.id_mood);
                let name_mood = " no name ";
                if( index !== -1 ) { name_mood = moodsArr[index].name };
                return <ResultItem key={result.id} result={result} mood={name_mood}></ResultItem>
            })} 
        </ul>
      </div>
    );
  }
}

export default ResultBox;
