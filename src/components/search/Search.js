import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

import {APIKEY} from "../../Config";

class Search extends Component{
    state = {
        searchText: "",
        amount: 15,
        apiUrl: "https://pixabay.com/api/",
        apiKey: APIKEY,
        images: []
    }
    render(){
        return(
            // floatingLabelText = placeholder
            <>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search for Images"
                    fullWidth />
            </>
        )
    }
}

export default Search;