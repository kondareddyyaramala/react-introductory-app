import React, { Fragment } from 'react';

export class Input extends React.Component {
  
    constructor(props){
        super(props);
        this.state = { 
            name: 'Please Enter a name',
            length: 0
        }
    }

    handleValueChange = (v) => {
        const { target: { value } } = v
        this.setState({ name: value});
        this.setState({ length: !!value ? value.length : 0});
    }

    handleOnFocus = () => {
        this.setState({ name: ''});
    }

    render(){
        // Render function
      return  (<Fragment>
            <label>Name</label>
            <input 
                value={this.state.name}
                onFocus={this.handleOnFocus}
                onChange={this.handleValueChange}></input>
            <div> User Entered value length :: {this.state.length}</div>
        </Fragment>
      )
    }
}