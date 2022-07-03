import React from 'react'
import { Dropdown } from 'reactstrap';

class MyDropdown extends React.Component{
 
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state ={
            dropdownOpen:false,
            title: this.props.title
        }
    }
    toggle(){
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    changeTitle(title){
        this.setState()
    }
 render(){   
    return (
        <Dropdown isOpen={this.state.dropdownOpen}>

        </Dropdown>
    )
 }
}

export default MyDropdown;