type currentPageType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export function calcSlicedPages({currentPage}: currentPageType) {
    let curPF = ((currentPage - 4) < 0) ? 1 : currentPage - 3;
    let curPL = currentPage > 4 ? currentPage + 4 : 8;

    let pages = []
    for (let i = curPF; i <= curPL; i++) {
        pages.push(i)
    }

    return pages
}