import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    description: string
    likesCount: number
}


function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9vyJKx4pLsdMnrXtpsZzKgHIfTV-izdSGHA&usqp=CAU"
                alt=""/>
            {props.description}
            <div>
                <span>{props.likesCount} like</span>
            </div>

        </div>
    )
}

export default Post;