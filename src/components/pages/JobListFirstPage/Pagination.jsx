import React from 'react';

import leftArrow from '../../images/left-arrow.svg';
import rightArrow from '../../images/right-arrow.svg';

export const Pagination = ({ nextPage, prevPage, page, gap, setPage, totalPages }) => {
	return (
		<div>
			<div className="pagination_container">
				<button
					onClick={prevPage}
					className={`page ${page === 1 && 'disabled'}  flex items-center`}
				>
					<img src={leftArrow} alt="" />
					<div className="pagination_arrow ml-[30px]" />
				</button>
				<button onClick={() => setPage(1)} className={`page ${page === 1 && 'disabled'}`}>
					1
				</button>
				{gap.before ? '...' : null}
				{gap.paginationGroup.map((el) => (
					<button
						onClick={() => setPage(el)}
						key={el}
						className={`page ${page === el ? 'active' : ''} `}
					>
						{`${el}`}
					</button>
				))}
				{gap.after ? '...' : null}
				<button
					onClick={() => setPage(totalPages)}
					className={`page ${page === totalPages && 'disabled'}`}
				>
					{totalPages}
				</button>
				<button
					onClick={nextPage}
					className={`page ${page === totalPages && 'disabled'} flex items-center`}
				>
					<div className="pagination_arrow mr-[30px]" />
					<img src={rightArrow} alt="" />
				</button>
			</div>
		</div>
	);
};