import React from 'react';

class CharacterCard extends React.Component {

    state = {
        active: false
    }

    activete = () => {
        this.setState({
            active: !this.state.active
        });
//fdfdf
        this.props.activationHandler(this.props.value);
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activete}>
                {this.props.value}
            </div>
        )
    }
}
export default CharacterCard;