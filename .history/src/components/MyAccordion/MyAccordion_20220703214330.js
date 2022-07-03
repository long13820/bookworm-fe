import React, { useState } from 'react'

function MyAccordion() {

    const [isOpen,setIsOpen] = useState("");
    const [lists, setLists] = useState([
        {
            _id: "id_category",
            item_names:["Category #1","Category #2","Category #3"],
            li
        }
    ])
  return (
    <div>MyAccordion</div>
  )
}

export default MyAccordion;
