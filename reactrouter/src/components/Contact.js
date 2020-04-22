import React, { Component } from 'react';
import {Prompt} from 'react-router-dom'

class Contact extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            isChecked:false
        }
    }
    
    render() {
        return (
            <div>
                <h3>ContactPage</h3>
                
                <button type="button" className="btn btn-default">Yes</button>&nbsp;
                
                <button type="button" className="btn btn-danger">No</button>
                <Prompt
                 when={this.state.isChecked}
                 message={location=>(`Do you want to go ${location.pathname}`)}
                >

                </Prompt>
                
            </div>
        );
    }
}

export default Contact;