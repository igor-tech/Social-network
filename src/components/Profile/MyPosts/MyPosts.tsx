import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {AddPostForm} from './AddPostForm';

type PostType = {
    id: number
    description: string
    likesCount: number
}
type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostBody: string) => void
}

const MyPosts = React.memo((props: MyPostsType) => {
    console.log('Render yo')
    let postsElement = [...props.posts].map(p => <Post key={p.id} description={p.description}
                                                       likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm newPostBody={(newPostText) => props.addPost(newPostText)}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
})

export default MyPosts;