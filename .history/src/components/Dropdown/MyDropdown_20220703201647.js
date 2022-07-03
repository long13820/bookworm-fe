import React from 'react'
import { Dropdown } from 'reactstrap';

class MyDropdown extends React.Component{
 
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        
    }

 render(){   
    return (
        <Dropdown isOpen={this.state.dropdownOpen}>

        </Dropdown>
    )
 }
}

export default MyDropdown;