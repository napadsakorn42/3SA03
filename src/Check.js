import React from 'react';
import './Check.css';
class Check extends React.Component{
    render(){
        let count_end = this.props.check_count > 3 ? 'check2' : '';
        let count_ends = this.props.check_count > 3 ? "Please Play Again" : "Count : " + this.props.check_count;
        let test = `check ${count_end}`;
        return(
            <div>
                <div className={test}>
                    <h2 className={test}>{this.count_end}{count_ends}</h2>
                </div>
            </div>
        )
    }
}
export default Check;