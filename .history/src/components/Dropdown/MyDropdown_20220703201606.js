import React from 'react'
import { Dropdown } from 'reactstrap';

class MyDropdown extends React.Component{
 
 render(){   
    return (
        <Dropdown isOpen={this.state.drop}>

        </Dropdown>
    )
 }
}

export default MyDropdown;