import React, { useState } from 'react'

function MyAccordion() {

    const [isOpen,setIsOpen] = useState("");
    const [lists, setLists] = useState([
        {
            _id: "id_category",
        }
    ])
  return (
    <div>MyAccordion</div>
  )
}

export default MyAccordion;
