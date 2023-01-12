import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from './Items';

export default function Pagination({ itemsPerPage, items }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< prev"
          renderOnZeroPageCount={null}
          className="flex text-[20px] gap-[20px] bg-white border-t w-full my-[10px] py-[10px]"
          activeClassName='text-blue-600 border-b border-blue-600'
        />
      </>
    );
  }