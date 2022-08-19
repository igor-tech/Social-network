import {SideBarType} from '../App';

let initialState = {
    friends: [
        {id: 1, name: 'igor', link: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id: 2, name: 'Ivan', link: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'},
        {id: 3, name: 'David', link: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
    ]
}


const sidebarReducer = (state: SideBarType = initialState, action: any) => {
    return state
}

export default sidebarReducer