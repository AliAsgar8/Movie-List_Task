import React from 'react'

const Pagination = ({totalPost, postPerPage, setCurrentPage}) => {
    let page = []

    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
        page.push(i)
    }
  return (
    <div>
    {
        page.map((curr,index) => {
            return(
                <button className='pagination-btn' key={index} onClick={() =>  setCurrentPage(curr)}>{curr}</button>
        )
        })
    }
      
    </div>
  )
}

export default Pagination
