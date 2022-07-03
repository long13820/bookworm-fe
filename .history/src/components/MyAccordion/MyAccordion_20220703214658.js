import React, { Fragment, useState } from 'react'
import { Card, CardHeader } from 'reactstrap';

function MyAccordion() {

    const [isOpen,setIsOpen] = useState("");
    const [lists, setLists] = useState([
        {
            _id: "id_category",
            item_names:["Category #1","Category #2","Category #3"],
            list_name:"Category",
        },
        {
            _id: "id_author",
            item_names: ["Author #1", "Author #2", "Author #3", "Author #4"],
            list_name: "Author",
    
        },
        {
            _id: "id_rating_star",
            item_names: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"],
            list_name: "Rating star",
    
        }
    ])

    const handleToggle = (id) => {
        if (ifOpen === id)
    }
  return (
    <Fragment>
        {lists.map((list) => (
            <Card id='accordion' className='mb-1' key={list._id}>
                <CardHeader onClick={() => handleToggle(list._id)}>
                    <strong></strong>
                </CardHeader>
            </Card>
        ))}
    </Fragment>
  )
}

export default MyAccordion;
