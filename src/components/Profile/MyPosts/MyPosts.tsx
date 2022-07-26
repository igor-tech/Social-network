import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




function MyPosts() {
    let posts = [
        {id: 1, description: 'Hi, how are you?' , likesCount: 12},
        {id: 2, description: 'It is my first post' , likesCount: 20},
        {id: 3, description: 'Bla VALl BLA' , likesCount: 25},
        {id: 4, description: 'YOO' , likesCount: 10},

    ]

    let postsElement = posts.map( p => <Post description={p.description} likesCount={p.likesCount}/>)


    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElement}

            </div>
        </div>

    )
}

export default MyPosts;