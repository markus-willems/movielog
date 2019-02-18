import React from 'react';
import { Link } from 'react-router-dom';

function Pagination({ currentPage, numberOfPages }: IPaginationProps) {
    return (
        <div className="pagination">
            <button>Left</button>
            <button>Right</button>
        </div>
    );
}

export default Pagination;
