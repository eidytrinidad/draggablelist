import React from 'react'

export const Pagination = ({itemsPerPage,totalItems,paginate}) => {

// console.log(itemsPerPage,totalItems,paginate())

    const pageNumbers=[];

    // console.log(Math.ceil(totalItems/itemsPerPage))
    for (let i = 1; i <= Math.ceil(totalItems/itemsPerPage); i++) {
        
        pageNumbers.push(i);
        
    }
    

    return (
        <nav>
            <ul  className="pagination">
                
                {pageNumbers.map(number=>(
                    <li  key={number}>
                        <a onClick={()=>paginate(number)}  className="active page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
