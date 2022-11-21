
import ItemBlock from './ItemBlock'
import  {Pagination}  from './Pagination'

const MainBlock = ({ data }) => {
  
  return (<>
   {data
					.slice(firstContentIndex, lastContentIndex)
					.map((item) => <ItemBlock key={item.id} {...item} />)}
      
        < Pagination
				nextPage={nextPage}
      prevPage={prevPage}
      page={page}
      gaps={gaps}
      setPage={setPage}
      totalPages={totalPages}
			/>
    
  </>
  )
}

export default MainBlock