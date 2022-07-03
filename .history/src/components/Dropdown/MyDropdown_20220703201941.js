import React from 'react'
import { Dropdown, DropdownToggle } from 'reactstrap';

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
        this.setState((prevState) => ({
            title:title
        }))
    }
 render(){   
    return (
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>{this.state.title}</DropdownToggle>
            <
        </Dropdown>
    )
 }
}

export default MyDropdown;