import React, { useState } from "react";
import styles from './Paginator.module.scss';





let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let positionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return <div className={styles.pages}>
            {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>left</button>}
            
            {pages
            .filter(p => p>= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
              return <span className={currentPage === p && styles.selectedPage} onClick={(e) => { onPageChanged(p) }}>{p}</span>
            })}

            {positionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>right</button>}

          </div>

}

export default Paginator;