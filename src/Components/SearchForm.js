import React, { Component } from 'react';
import '../Styles/SearchForm.css';

class SearchForm extends Component {

    constructor(props){
        super();
    }

    searchByMood = ev => {
        this.props.searchByMood(ev.target.value);
    }
    render() {
        return (
        <div className="searchform-box">
        <label htmlFor='mood-input'>
            <input id='mood-input' name="mood-input" type="text" placeholder="Write a mood..." onChange={this.searchByMood} ></input>
        </label>
        </div>
        );
    }
}

export default SearchForm;
