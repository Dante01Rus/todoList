import './Pagination.css'

type PaginationTypes = {
  totalCount: string | null;
  limit: number;
  changePage: (page: number) => void;
}

export const Pagination = ({ totalCount, limit, changePage}: PaginationTypes): JSX.Element => {

  const paginationLength = Math.ceil(Number(totalCount) / limit);
  const paginationArray = [];

  for(let i = 0; i < paginationLength; ++i) {
    paginationArray.push(i + 1);
  }

  return (
    <ul className="pagination">
      {paginationArray.map((item) => (
        <li onClick={() => changePage(item)} className="pagination-item" key={item + 'p'}>{item}</li>
      ))}
    </ul>
  )
}