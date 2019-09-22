import React, {Component} from 'react';
import './App.css';

export default class Cardword extends Component{
    render(){
        return(
            <div>
                {this.props.value}
            </div>
        )
    }
}
export default Cardword;