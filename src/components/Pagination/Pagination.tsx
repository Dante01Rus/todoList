import { useEffect, useState } from 'react';
import './Pagination.css'

type PaginationTypes = {
  totalCount: string | null;
  limit: number;
  changePage: (page: number) => void;
}

export const Pagination = ({ totalCount, limit, changePage }: PaginationTypes): JSX.Element => {

  const [paginationLength, setPaginationLength] = useState<number>(Math.ceil(Number(totalCount) / limit));
  const [paginationArray, setPaginationArray] = useState<number[]>([]);


  useEffect(() => {
    setPaginationArray(() => {
      let arr = [];
      for (let i = 0; i < paginationLength; ++i) {
        arr.push(i + 1);
      }

      return arr;
    })

  }, [totalCount, limit])


  return (
    <ul className="pagination">
      {paginationArray.map((item) => (
        <li onClick={() => changePage(item)} className="pagination-item" key={item + 'p'}>{item}</li>
      ))}
    </ul>
  )
}