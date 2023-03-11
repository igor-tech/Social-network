type currentPageType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export function calcSlicedPages({pageSize, currentPage, totalUsersCount}: currentPageType) {
    let pagesCount = Math.ceil(totalUsersCount /pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curPF = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    let curPL = currentPage + 5;
    return pages.slice(curPF, curPL)
}