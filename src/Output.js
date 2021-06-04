import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div className="keypad" >
                <p style={{fontSize:'16px',fontWeight:'bold'}}>{this.props.result ? this.props.result : "Enter Values"}</p>
            </div>
        );
    }
}

export default Output;