import React, { Component } from 'react';
import firebase from './firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel, faHeart, faShareAlt} from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import ResultBox from './ResultBox';
import '../Styles/App.css'; 

library.add(faStroopwafel, faHeart, faShareAlt); 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        moods: [],
        mood: ""
    }
    this.searchByMood = this.searchByMood.bind(this);
  }
  componentDidMount() {
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    const moodsArray = [];
    firestore.settings(settings);

    // getting moods dat
    firestore.collection('moods').get()
      .then((snapshot) => {
          snapshot.forEach((doc) => moodsArray.push({ name: doc.data().name, id:doc.id} ));
          this.setState({ moods: moodsArray });
      })
      .catch((err) => {
          console.log('Error getting documents', err);
      });
  }

  searchByMood(mood) {
    let index = this.state.moods.findIndex(x =>  x.name === mood);
    if( index !== -1 ) {
      this.setState({ mood: this.state.moods[index].id });
    } else {
      this.setState({ mood: "" });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
   // console.log(this.state.mood !== nextState.mood, this.state.moods !== nextState.moods, "Cambió el estado de mood or moods? ")
    return this.state.mood !== nextState.mood || this.state.moods !== nextState.moods
  }

  render() {
    const id_mood = this.state.mood;
    const moodsArr = this.state.moods;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Moodnimal</h1>
          <p>
            Find a beauty pic for mood!
          </p>         
        </header>
        <SearchForm moods={moodsArr} searchByMood = {this.searchByMood}></SearchForm>
        <ResultBox moods={moodsArr} mood={id_mood}></ResultBox>
      </div>
    );
  }
}

export default App;
