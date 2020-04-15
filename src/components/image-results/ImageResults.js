import React, { Component } from 'react';

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

export default ImageResults;