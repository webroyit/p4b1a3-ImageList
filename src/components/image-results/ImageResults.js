import React, { Component } from 'react';
import PropTypes from "prop-types";

class ImageResults extends Component{
    render(){
        console.log(this.props.images);
        return(
            <div>
                <h2>Images</h2>
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;