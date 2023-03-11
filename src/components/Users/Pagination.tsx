import {calcSlicedPages} from '../../utils/calcSlicedPages';
import styles from './users.module.css';
import React from 'react';

type PaginationType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChanged: (page: number) => void
}
export const Pagination = ({pageSize, currentPage, onPageChanged, totalUsersCount}: PaginationType) => {
    const slicedPages = calcSlicedPages({pageSize, currentPage, totalUsersCount})
    return <div>
        {slicedPages.map((page, index) => {
            return <span key={index} style={{cursor: 'pointer'}}
                         className={currentPage === page ? styles.selectedPage : ''}
                         onClick={() => {
                             onPageChanged(page)
                         }}> {page} </span>
        })}
    </div>
}