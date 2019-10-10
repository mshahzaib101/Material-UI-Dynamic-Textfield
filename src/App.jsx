import React, { Component } from 'react';
import UploadComponent from './UploadComponent';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <UploadComponent /> 
            </div>   
        )
    }
}

export default App;