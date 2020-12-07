import React, { useState } from "react";

import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { Pagination } from "./Pagination";

const bananas = [
  {
    id: 0,
    title: "dish",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 1,
    title: "dishnana",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    title: "Cavenana",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 3,
    title: "dish banana",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 4,
    title: "Caven",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 5,
    title: "banana",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
]

export default function Prueba2() {
  const [state, setState] = useState(bananas);



  console.log(state);

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(3)

  const indexOfLastitems = currentPage*itemsPerPage;
  const indexOfFirstitems = indexOfLastitems-itemsPerPage;
  
  const currentItems = state.slice(indexOfFirstitems,indexOfLastitems);

 
  const paginate =(pageNumber)=>{
    setCurrentPage(pageNumber)
  }



  function itemRenderer(currentItems, index) {
    return (
      <div className="item">
        <p className="title">{currentItems.title}</p>
        <p className="body">{currentItems.body}</p>
        <div className="small">
          item.id: {currentItems.id} - index: {index}
        </div>
      </div>
    );
  }

  function handleRLDDChange(reorderedItems) {
    setState( reorderedItems );
  }

  return (
    <>
      <div className="container mt-5">
        <RLDD
          items={currentItems}
          itemRenderer={itemRenderer}
          onChange={handleRLDDChange}
        />
        <Pagination itemsPerPage={itemsPerPage} totalItems={state.length} paginate={paginate}/>
      </div>
    </>
  );
}
