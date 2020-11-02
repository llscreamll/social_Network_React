import React from 'react';
import style from "./Paginator.module.css"
import Pagination from '@material-ui/lab/Pagination';

type PropsType = {
    totalUserCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void

}
let Paginator: React.FC<PropsType> = ({
                                          totalUserCount,
                                          pageSize,
                                          onPageChanged,
                                      }) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);

    return (

            <Pagination size="medium" siblingCount={5} showFirstButton showLastButton count={pagesCount}
                        variant="outlined" color="primary" onChange={(e, value) => onPageChanged(value)}/>

    )
}

export default Paginator;